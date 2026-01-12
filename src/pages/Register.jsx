import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../api/auth.api";
import Input from "../components/Input";
import Button from "../components/Button";

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
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded w-96">
        <h2 className="text-2xl mb-4">Register</h2>
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full">Create Account</Button>
      </form>
    </div>
  );
}