export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#050505] text-white">
      {/* Circled Logo Placeholder */}
      <div className="w-24 h-24 mb-8 rounded-full border-2 border-yellow-500 flex items-center justify-center bg-zinc-900">
        <span className="text-yellow-500 font-bold tracking-widest">LOGO</span>
      </div>
      
      {/* Loading Bar */}
      <div className="w-64 h-1 bg-zinc-800 rounded overflow-hidden">
        <div className="h-full bg-yellow-500 animate-pulse w-1/2"></div>
      </div>
      <p className="mt-4 text-sm text-zinc-400 uppercase tracking-widest">Loading System...</p>
    </div>
  );
}