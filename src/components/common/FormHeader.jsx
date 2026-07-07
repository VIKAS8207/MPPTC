export default function FormHeader() {
  return (
    <div className="relative w-full h-32 mb-6 bg-zinc-50 border border-zinc-200 rounded-[5px] overflow-hidden flex items-end p-6">
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d4d4d8" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <path d="M 40 0 V 80 H 200" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="4 2" />
      </svg>
      <div className="relative z-10">
        <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-1 block">System Intake / Node 01</span>
        <h1 className="text-3xl font-light border-l-4 border-yellow-500 pl-4 text-black bg-white/80 py-1 pr-4 inline-block">
          Technical Intake Form
        </h1>
      </div>
    </div>
  );
}