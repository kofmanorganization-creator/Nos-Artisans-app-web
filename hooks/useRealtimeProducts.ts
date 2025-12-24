
import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";

export function useRealtimeProducts() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const q = query(
        collection(db, "products"),
        where("status", "==", "published")
      );
      
      const unsubscribe = onSnapshot(q, (s) => {
        setItems(s.docs.map(d => ({ id: d.id, ...d.data() })));
        setLoading(false);
      }, (err) => {
        console.error("useRealtimeProducts error:", err);
        setLoading(false);
      });
      
      return () => unsubscribe();
    } catch (e) {
      setLoading(false);
    }
  }, []);

  return { items, loading };
}
