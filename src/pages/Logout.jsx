import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear token and any other session info
    localStorage.removeItem("auth_token");
    const timer = setTimeout(() => navigate("/", { replace: true }), 800);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <NavBar />
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
          <h1 className="text-2xl font-semibold mb-2">Signing you out…</h1>
          <p className="text-slate-400">You'll be redirected to the home page shortly.</p>
        </div>
      </div>
    </div>
  );
}
