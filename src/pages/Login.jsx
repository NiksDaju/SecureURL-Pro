import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/auth.api";
import Input from "../components/Input";
import Button from "../components/Button";
import NavBar from "../components/NavBar";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await login(email, password);
      localStorage.setItem("auth_token", data.token);
      navigate("/dashboard");
    } catch {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <NavBar />
      <div className="max-w-md mx-auto px-4 py-10">
        <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-lg border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Welcome back</h2>
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-rose-400 mb-3">{error}</p>}
          <Button className="w-full" disabled={loading}>
            {loading ? "Signing in..." : "Login"}
          </Button>
          <p className="mt-4 text-sm text-center text-slate-400">
            No account? <Link to="/register" className="text-cyan-300 hover:underline">Create one</Link>
          </p>
        </form>
      </div>
    </div>
  );
}