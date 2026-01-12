import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth.api";
import Input from "../components/Input";
import Button from "../components/Button";

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
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded w-96">
        <h2 className="text-2xl mb-4">Login</h2>
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-400 mb-2">{error}</p>}
        <Button className="w-full" disabled={loading}>
          {loading ? "Signing in..." : "Login"}
        </Button>
        <p className="mt-3 text-sm text-center cursor-pointer" onClick={() => navigate("/register")}>
          Create account
        </p>
      </form>
    </div>
  );
}