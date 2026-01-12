export default function Input({ label, ...props }) {
  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input
        {...props}
        className="w-full p-2 rounded bg-slate-700 border border-slate-600"
      />
    </div>
  );
}