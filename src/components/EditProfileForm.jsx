import { useState } from "react";
import { updateProfile } from "../api/user.api";
import Input from "./Input";
import Button from "./Button";

export default function EditProfileForm({ user, onUpdated }) {
  const [name, setName] = useState(user.name);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const payload = { name };
      if (password) payload.password = password;

      await updateProfile(payload);
      setMsg("Profile updated successfully.");
      onUpdated();
      setPassword("");
    } catch {
      setMsg("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Input
        label="New Password (optional)"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {msg && <p className="text-sm text-green-400">{msg}</p>}

      <Button disabled={loading}>
        {loading ? "Updating..." : "Save Changes"}
      </Button>
    </form>
  );
}
