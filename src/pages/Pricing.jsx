export default function Pricing() {
  return (
    <div className="p-10">
      {/* Pricing preview */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-2xl font-semibold mb-6">Pricing</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h4 className="font-semibold">Free</h4>
            <p className="text-slate-400 text-sm">Basic scans for personal use.</p>
            <ul className="mt-3 text-sm text-slate-300 space-y-1">
              <li>• Limited daily scans</li>
              <li>• Community intel</li>
              <li>• Basic reports</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h4 className="font-semibold">Pro</h4>
            <p className="text-slate-400 text-sm">Advanced analysis for power users.</p>
            <ul className="mt-3 text-sm text-slate-300 space-y-1">
              <li>• Higher limits</li>
              <li>• Deeper heuristics</li>
              <li>• Exportable reports</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900 p-6">
            <h4 className="font-semibold">Enterprise</h4>
            <p className="text-slate-400 text-sm">Team features and integrations.</p>
            <ul className="mt-3 text-sm text-slate-300 space-y-1">
              <li>• SSO and user roles</li>
              <li>• Custom limits</li>
              <li>• Dedicated support</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button onClick={() => navigate("/pricing")} className="bg-cyan-600 hover:bg-cyan-500">Compare plans</Button>
        </div>
      </section>
    </div>
  );
}