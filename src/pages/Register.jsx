import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../api/auth.api";
import Input from "../components/Input";
import Button from "../components/Button";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(name, email, password);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <NavBar />
      <div className="flex-1">
        <div className="max-w-md mx-auto px-4 py-10">
          <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-lg border border-slate-800 shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">Create your account</h2>
            <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="w-full">Create Account</Button>
            <p className="mt-4 text-sm text-center text-slate-400">
              Have an account? <Link to="/login" className="text-cyan-300 hover:underline">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}