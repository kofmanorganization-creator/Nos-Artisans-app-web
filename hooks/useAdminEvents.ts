
import { useEffect, useState } from "react";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";

export function useAdminEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const q = query(
        collection(db, "admin_events"),
        orderBy("createdAt", "desc"),
        limit(30)
      );
      
      const unsubscribe = onSnapshot(q, (snap) => {
        const data = snap.docs.map(d => ({ 
          id: d.id, 
          ...d.data(),
          createdAt: d.data().createdAt?.toDate?.()?.toISOString() || new Date().toISOString()
        }));
        setEvents(data);
        setLoading(false);
      }, (error) => {
        console.error("Erreur Firestore (useAdminEvents):", error);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (err) {
      console.error("Erreur d'initialisation du hook useAdminEvents:", err);
      setLoading(false);
    }
  }, []);

  return { events, loading };
}
