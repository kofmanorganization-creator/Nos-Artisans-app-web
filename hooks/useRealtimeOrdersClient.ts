
import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";

export function useRealtimeOrdersClient(clientId: string) {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!clientId) {
      setLoading(false);
      return;
    }
    
    try {
      const q = query(
        collection(db, "orders"), 
        where("clientId", "==", clientId)
      );
      
      const unsubscribe = onSnapshot(q, (s) => {
        setOrders(s.docs.map(d => ({ id: d.id, ...d.data() })));
        setLoading(false);
      }, (err) => {
        console.error("useRealtimeOrdersClient error:", err);
        setLoading(false);
      });
      
      return () => unsubscribe();
    } catch (e) {
      setLoading(false);
    }
  }, [clientId]);

  return { orders, loading };
}
