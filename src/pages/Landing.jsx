import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">SecureURL Pro</h1>
      <p className="mb-6 text-gray-400">Scan and protect against malicious links.</p>
      <div className="flex gap-4">
        <Button onClick={() => navigate("/login")}>Login</Button>
        <Button onClick={() => navigate("/guest")} className="bg-green-600">
          Scan as Guest
        </Button>
      </div>
    </div>
  );
}