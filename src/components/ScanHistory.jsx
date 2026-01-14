import { useEffect, useState } from "react";
import { getScanHistory } from "../api/user.api";
import Loader from "./Loader";

export default function ScanHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await getScanHistory();
        setHistory(res.data);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);

  if (loading) return <Loader />;

  if (!history.length)
    return <p className="text-gray-400">No scans yet.</p>;

  return (
    <div className="space-y-3">
      {history.map((item) => (
        <div key={item.id} className="bg-slate-700 p-4 rounded">
          <p className="text-sm text-gray-400">{item.url}</p>
          <div className="flex justify-between">
            <span>Risk: {item.risk_level}</span>
            <span>{new Date(item.scanned_at).toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
