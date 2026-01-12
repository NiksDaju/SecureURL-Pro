import { useEffect, useState } from "react";
import { getUserProfile } from "../api/user.api";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserProfile().then((res) => setUser(res.data));
  }, []);

  if (!user) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10">
      <h2 className="text-2xl mb-4">Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Credits: {user.scan_credits}</p>
    </div>
  );
}