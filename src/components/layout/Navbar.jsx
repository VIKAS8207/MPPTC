import { useNavigate } from 'react-router-dom';

  

export default function Navbar() {
    const navigate = useNavigate();
  return (
    // Outer wrapper handles the spacing from the top and sides, and keeps it fixed
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4 sm:px-6 pointer-events-none">
      
      {/* Actual Navbar - pointer-events-auto restores clicking inside the nav */}
      <nav className="w-full max-w-5xl bg-[#050505]/85 backdrop-blur-md border border-zinc-800 rounded-[5px] px-4 py-3 flex justify-between items-center shadow-2xl pointer-events-auto">
        
        {/* Left Side: Logo Container */}
<div className="flex items-center gap-3 cursor-pointer">
  {/* Logo Image - No Border, No Background */}
  <div className="w-9 h-9 flex items-center justify-center overflow-hidden shrink-0">
    <img 
      src="/image/logo.png" 
      alt="MPPTCL Logo" 
      className="w-full h-full object-contain" 
    />
  </div>
  <span className="font-bold text-base sm:text-lg tracking-wider text-white">
    Madhya Pradesh Power Transmission Company Ltd.
  </span>
</div>

        {/* Right Side: Info & Admin Login */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Info Button (Using a simple SVG icon for better mobile UX) */}
          <button 
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group"
            title="Information"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-5 h-5 group-hover:stroke-yellow-500 transition-colors"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span className="text-sm hidden sm:inline">Info</span>
          </button>

          {/* Admin Login Button */}
          <button 
            onClick={() => navigate('/admin/login')}
            className="bg-yellow-500 text-black px-4 py-2 sm:px-5 sm:py-2 rounded-[5px] hover:bg-yellow-400 font-semibold transition-all text-xs sm:text-sm shadow-[0_0_15px_rgba(234,179,8,0.15)] hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]"
          >
            Admin Login
          </button>
          
        </div>
      </nav>
    </div>
  );
}