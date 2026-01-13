import { Link, useLocation } from "react-router-dom";

const isAuthenticated = () => !!localStorage.getItem("auth_token");

export default function NavBar() {
  const location = useLocation();
  const authed = isAuthenticated();

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-lg font-semibold hover:text-cyan-300">
            SecureURL Pro
          </Link>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          <Link to="/pricing" className={`hover:text-cyan-300 ${location.pathname === "/pricing" ? "text-cyan-300" : "text-slate-200"}`}>
            Pricing
          </Link>
                    {authed ? (
            <div className="flex items-center gap-3">
              <Link to="/dashboard" className={`hover:text-cyan-300 ${location.pathname === "/dashboard" ? "text-cyan-300" : "text-slate-200"}`}>
                Dashboard
              </Link>
              <Link to="/scanner" className={`hover:text-cyan-300 ${location.pathname === "/scanner" ? "text-cyan-300" : "text-slate-200"}`}>
                Scanner
              </Link>
              <Link to="/profile" className={`hover:text-cyan-300 ${location.pathname === "/profile" ? "text-cyan-300" : "text-slate-200"}`}>
                Profile
              </Link>
              <Link to="/logout" className="px-3 py-1.5 rounded bg-rose-600 hover:bg-rose-500 text-white">
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link to="/login" className="px-3 py-1.5 rounded bg-cyan-600 hover:bg-cyan-500 text-white">
                Login
              </Link>
              <Link to="/register" className="px-3 py-1.5 rounded border border-cyan-600 text-cyan-300 hover:bg-cyan-900/30">
                Sign up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
