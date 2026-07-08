export default function DashboardMetrics() {
  return (
    <div className="w-full mb-8 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Row: Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-[5px] border border-zinc-200 shadow-sm">
          <div className="text-xs text-zinc-500 tracking-wide uppercase mb-1">Total System Revenue</div>
          <div className="text-2xl font-semibold text-zinc-900">₹36,75,000</div>
          <div className="text-xs text-green-600 mt-2 flex items-center gap-1 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            +12.5% this month
          </div>
        </div>
        <div className="bg-white p-5 rounded-[5px] border border-zinc-200 shadow-sm">
          <div className="text-xs text-zinc-500 tracking-wide uppercase mb-1">Active Projects</div>
          <div className="text-2xl font-semibold text-zinc-900">142</div>
          <div className="text-xs text-yellow-600 mt-2 flex items-center gap-1 font-medium">
            38 Pending Approval
          </div>
        </div>
        <div className="bg-white p-5 rounded-[5px] border border-zinc-200 shadow-sm">
          <div className="text-xs text-zinc-500 tracking-wide uppercase mb-1">Grid Sync Requests</div>
          <div className="text-2xl font-semibold text-zinc-900">27</div>
          <div className="text-xs text-zinc-400 mt-2 font-medium">
            Technical Feasibility
          </div>
        </div>
        <div className="bg-[#050505] p-5 rounded-[5px] border border-zinc-800 shadow-lg text-white">
          <div className="text-xs text-zinc-400 tracking-wide uppercase mb-1">System Status</div>
          <div className="text-xl font-semibold text-yellow-500 mt-1 flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
            Node Online
          </div>
          <div className="text-[10px] text-zinc-500 mt-2 font-mono">LST_SYNC: JUST NOW</div>
        </div>
      </div>

      {/* Middle Row: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Bar Chart Area */}
        <div className="lg:col-span-2 bg-white p-6 rounded-[5px] border border-zinc-200 shadow-sm">
          <h3 className="text-sm font-semibold text-zinc-800 mb-6">Revenue Collection (Last 6 Months)</h3>
          <div className="h-48 flex items-end gap-2 sm:gap-4 justify-between pt-4 border-b border-zinc-200">
            {/* Custom Tailwind Bar Chart */}
            {[40, 70, 45, 90, 65, 100].map((height, i) => (
              <div key={i} className="w-full flex flex-col justify-end items-center group">
                <span className="text-[10px] text-zinc-400 font-mono mb-2 opacity-0 group-hover:opacity-100 transition-opacity">₹{height}L</span>
                <div 
                  className="w-full bg-zinc-100 group-hover:bg-yellow-500 transition-colors rounded-t-[3px] border border-zinc-200 group-hover:border-yellow-600"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-zinc-400 font-medium uppercase tracking-wider">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
        </div>

        {/* Donut Chart Area */}
        <div className="bg-white p-6 rounded-[5px] border border-zinc-200 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-sm font-semibold text-zinc-800 mb-6 w-full text-left">Remittance Breakdown</h3>
          <div className="relative w-32 h-32 mb-4">
            {/* Pure SVG Donut Chart */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#f4f4f5" strokeWidth="4"></circle>
              {/* NEFT Segment (60%) */}
              <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#050505" strokeWidth="4" strokeDasharray="60 40" strokeDashoffset="0"></circle>
              {/* PG Segment (25%) */}
              <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#eab308" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-60"></circle>
              {/* Offline Segment (15%) */}
              <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="#a1a1aa" strokeWidth="4" strokeDasharray="15 85" strokeDashoffset="-85"></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-xl font-bold text-zinc-900">100%</span>
            </div>
          </div>
          <div className="w-full flex justify-between text-xs font-medium mt-2">
            <span className="flex items-center gap-1.5 text-zinc-600"><span className="w-2 h-2 rounded-full bg-[#050505]"></span> NEFT</span>
            <span className="flex items-center gap-1.5 text-zinc-600"><span className="w-2 h-2 rounded-full bg-yellow-500"></span> PG</span>
            <span className="flex items-center gap-1.5 text-zinc-600"><span className="w-2 h-2 rounded-full bg-zinc-400"></span> Offline</span>
          </div>
        </div>

      </div>
    </div>
  );
}