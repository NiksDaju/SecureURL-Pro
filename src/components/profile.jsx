import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getUserProfile } from "../api/user.api";
import Button from "../components/Button";
import Loader from "../components/Loader";
import EditProfileForm from "../components/EditProfileForm";
import ScanHistory from "../components/ScanHistory";

export default function Profile() {
  const { logout } = useAuth();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("overview");

  const loadProfile = async () => {
    const res = await getUserProfile();
    setUser(res.data);
  };

  useEffect(() => {
    loadProfile().finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h2 className="text-3xl font-bold mb-6">My Profile</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button onClick={() => setTab("overview")} className={tab==="overview"?"text-blue-400":""}>Overview</button>
        <button onClick={() => setTab("edit")} className={tab==="edit"?"text-blue-400":""}>Edit Profile</button>
        <button onClick={() => setTab("history")} className={tab==="history"?"text-blue-400":""}>Scan History</button>
      </div>

      {/* OVERVIEW */}
      {tab === "overview" && (
        <div className="bg-slate-800 rounded p-6 space-y-4">
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Plan:</b> {user.user_tier || "Free"}</p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-700 p-4 rounded">
              <p className="text-gray-400">Scan Credits</p>
              <p className="text-xl font-bold">{user.scan_credits}</p>
            </div>
            <div className="bg-slate-700 p-4 rounded">
              <p className="text-gray-400">Reward Points</p>
              <p className="text-xl font-bold">{user.reward_points}</p>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button onClick={logout} className="bg-red-600 hover:bg-red-700">
              Logout
            </Button>
          </div>
        </div>
      )}

      {/* EDIT PROFILE */}
      {tab === "edit" && (
        <div className="bg-slate-800 rounded p-6">
          <EditProfileForm user={user} onUpdated={loadProfile} />
        </div>
      )}

      {/* SCAN HISTORY */}
      {tab === "history" && (
        <div className="bg-slate-800 rounded p-6">
          <ScanHistory />
        </div>
      )}
    </div>
  );
}
