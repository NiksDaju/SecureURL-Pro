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
          <Button onClick={() => navigate("/guest")} className="bg-green-600 hover:bg-green-500">
            Scan as Guest
          </Button>
        </div>
      </div>

      {/* Hero section with headline, description, CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-10 text-center">
        <h2 className="text-3xl font-bold">Stay safe from phishing, malware, and risky links</h2>
        <p className="mt-3 text-slate-400 max-w-3xl mx-auto">
          SecureURL Pro is an URL scanner for everyday internet users.
          Paste a link, and we’ll check it against advanced signals and threat intelligence before you click.
        </p>
      </section>

      {/* How it works (3 steps) */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-semibold mb-6">How it works</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <div className="text-sm text-slate-400">Step 1</div>
            <h4 className="font-semibold mt-1">Paste the URL</h4>
            <p className="text-sm text-slate-400 mt-2">Enter any link you’re unsure about. We normalize and prepare it for analysis.</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <div className="text-sm text-slate-400">Step 2</div>
            <h4 className="font-semibold mt-1">Risk analysis</h4>
            <p className="text-sm text-slate-400 mt-2">Our multi-layer model checks: reputation, SSL, redirects, content, and more.</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <div className="text-sm text-slate-400">Step 3</div>
            <h4 className="font-semibold mt-1">Get a clear verdict</h4>
            <p className="text-sm text-slate-400 mt-2">See Clean, Suspicious, or Malicious with reasons and safe next steps.</p>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-semibold mb-4">Key features</h3>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-300">
          <li className="rounded border border-slate-800 bg-slate-900 p-4">• Real-time risk scoring</li>
          <li className="rounded border border-slate-800 bg-slate-900 p-4">• Multi-engine threat checks</li>
          <li className="rounded border border-slate-800 bg-slate-900 p-4">• SSL/TLS and domain reputation signals</li>
          <li className="rounded border border-slate-800 bg-slate-900 p-4">• Obfuscated script and redirect detection</li>

        </ul>
      </section>

      {/* Why choose SecureURL Pro */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-semibold mb-4">Why choose SecureURL Pro</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-300">
          <div className="rounded border border-slate-800 bg-slate-900 p-5">Trusted by students and professionals for quick link checks.</div>
          <div className="rounded border border-slate-800 bg-slate-900 p-5">Fast, heuristic verdicts with human-readable explanations.</div>
          <div className="rounded border border-slate-800 bg-slate-900 p-5">Privacy-first design as we only analyze what’s needed.</div>
        </div>
      </section>

      

      {/* Strong call to action */}
      

      {/* Footer text */}
      <footer className="border-t border-slate-800/70 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} SecureURL Pro — URL scanning to keep you safe online.
      </footer>
    </div>
  );
}