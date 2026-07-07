import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real application, authenticate credentials here
    navigate('/admin/dashboard');
  };

  // Added 'text-black' to ensure typed text is strictly dark, and 'bg-white' for solid contrast
  const inputBaseClass = "w-full border border-zinc-300 rounded-[5px] px-3 py-2.5 text-sm text-black placeholder:text-zinc-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 bg-white transition-colors";

  return (
    <div className="flex-grow flex items-center justify-center w-full px-4 py-10 relative">
      <div className="bg-white rounded-[5px] border border-zinc-200 shadow-2xl max-w-md w-full overflow-hidden relative z-10">
        
        {/* Enterprise Header with Subtle Grid Pattern */}
        <div className="relative bg-zinc-50 border-b border-zinc-200 pt-10 pb-8 px-8 text-center overflow-hidden">
          {/* Background Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-login" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#d4d4d8" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-login)" />
          </svg>
          
          {/* Cyber-Industrial Lock Icon */}
          <div className="relative w-14 h-14 mx-auto bg-[#050505] border border-yellow-500 rounded flex items-center justify-center mb-5 shadow-md rotate-45">
            <div className="-rotate-45">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#eab308" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
          </div>
          <h1 className="relative text-2xl font-semibold text-black tracking-tight">Admin Portal</h1>
          <p className="relative text-[10px] font-mono text-zinc-500 tracking-widest uppercase mt-2">Secure Authentication Node</p>
        </div>

        {/* Login Form */}
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 text-zinc-600">Administrator ID</label>
              <input type="text" required placeholder="Enter your ID" className={inputBaseClass} />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider mb-1.5 text-zinc-600">Password</label>
              <input type="password" required placeholder="••••••••" className={inputBaseClass} />
            </div>
            
            <div className="flex items-center justify-between text-xs pt-2">
              <label className="flex items-center cursor-pointer group">
                <input type="checkbox" className="w-3.5 h-3.5 text-yellow-500 border-zinc-300 rounded-[3px] focus:ring-yellow-500 mr-2" />
                <span className="text-zinc-600 group-hover:text-black transition-colors font-medium">Remember me</span>
              </label>
              <span className="text-zinc-500 hover:text-yellow-600 font-medium cursor-pointer transition-colors underline underline-offset-2">Forgot credentials?</span>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#050505] text-yellow-500 px-4 py-3 rounded-[5px] hover:bg-zinc-800 font-bold tracking-widest uppercase transition-colors shadow-sm mt-6 border border-[#050505] hover:border-yellow-500"
            >
              Authenticate
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}