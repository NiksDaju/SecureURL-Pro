import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <NavBar />
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">SecureURL Pro</h1>
        <p className="mb-8 text-slate-400">Scan and protect against malicious links.</p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => navigate("/login")} className="bg-cyan-600 hover:bg-cyan-500">Login</Button>
          <Button onClick={() => navigate("/guest")} className="bg-green-600 hover:bg-green-500">
            Scan as Guest
          </Button>
        </div>
      </div>
    </div>
  );
}