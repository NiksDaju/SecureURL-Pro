import { useState } from "react";
import { scanURL } from "../api/scan.api";
import Input from "../components/Input";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <NavBar />
      <div className="max-w-xl mx-auto px-4 py-10">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">Guest Scan</h2>
          <p className="text-sm text-slate-400 mb-4">Paste a URL to check it against our threat intelligence and heuristics.</p>
          <Input label="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
          <Button onClick={handleScan} disabled={loading} className="w-full">
            {loading ? "Scanning..." : "Scan"}
          </Button>
          {result && (
            <div className="mt-5 bg-slate-950 border border-slate-800 p-4 rounded">
              <p className="mb-1">Risk: <span className="font-semibold capitalize">{result.risk_level}</span></p>
              <p>Verdict: <span className="font-semibold capitalize">{result.verdict}</span></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}