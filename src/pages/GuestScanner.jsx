import { useState } from "react";
import { scanURL } from "../api/scan.api";
import Input from "../components/Input";
import Button from "../components/Button";

export default function GuestScanner() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    const { data } = await scanURL(url);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Guest Scan</h2>
      <Input label="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
      <Button onClick={handleScan} disabled={loading}>
        {loading ? "Scanning..." : "Scan"}
      </Button>
      {result && (
        <div className="mt-4 bg-slate-800 p-4 rounded">
          <p>Risk: {result.risk_level}</p>
          <p>Verdict: {result.verdict}</p>
        </div>
      )}
    </div>
  );
}