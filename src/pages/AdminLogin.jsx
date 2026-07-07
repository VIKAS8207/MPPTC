import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real application, authenticate credentials here
    navigate('/admin/dashboard');
  };

  const inputBaseClass = "w-full border border-zinc-300 rounded-[5px] px-3 py-2 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500";

  return (
    <div className="flex-grow flex items-center justify-center w-full px-4 py-10">
      <div className="bg-white p-8 rounded-[5px] border border-zinc-200 shadow-2xl max-w-md w-full">
        
        {/* Admin Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto bg-zinc-900 border border-yellow-500 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#eab308" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <h1 className="text-2xl font-light text-black">Admin Access</h1>
          <p className="text-xs text-zinc-500 tracking-widest uppercase mt-1">System Node / Secure Login</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-zinc-700">Administrator ID</label>
            <input type="text" required placeholder="Enter your ID" className={inputBaseClass} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-zinc-700">Password</label>
            <input type="password" required placeholder="••••••••" className={inputBaseClass} />
          </div>
          
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="w-3.5 h-3.5 text-yellow-500 border-zinc-300 rounded-[3px] focus:ring-yellow-500 mr-2" />
              <span className="text-zinc-600">Remember me</span>
            </label>
            <span className="text-zinc-500 hover:text-black cursor-pointer transition-colors">Forgot credentials?</span>
          </div>

          <button 
            type="submit"
            className="w-full bg-yellow-500 text-black px-4 py-2.5 rounded-[5px] hover:bg-yellow-400 font-semibold transition-colors shadow-sm mt-4"
          >
            Authenticate
          </button>
        </form>
      </div>
    </div>
  );
}