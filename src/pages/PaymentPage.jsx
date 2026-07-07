import { useState } from 'react';

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState('');

  // Reusable card classes
  const baseCardClass = "border rounded-[5px] p-6 text-left cursor-pointer transition-all flex flex-col h-full";
  const unselectedCardClass = "border-zinc-200 bg-white hover:border-yellow-400 hover:shadow-md";
  const selectedCardClass = "border-yellow-500 ring-1 ring-yellow-500 bg-yellow-50/30 shadow-md";

  return (
    <div className="flex-grow flex flex-col justify-center max-w-4xl mx-auto w-full py-10 px-4">
      
      {/* Cyber-Industrial Header (Consistent with FormPage) */}
      <div className="relative w-full h-24 mb-6 bg-zinc-50 border border-zinc-200 rounded-[5px] overflow-hidden flex items-end p-6">
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
          <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-1 block">System Intake / Node 02</span>
          <h1 className="text-2xl font-light border-l-4 border-yellow-500 pl-4 text-black bg-white/80 py-1 pr-4 inline-block">
            Payment Gateway Configuration
          </h1>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[5px] border border-zinc-200 shadow-xl text-zinc-900">
        <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-6">Select Remittance Method</h2>
        
        {/* Payment Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          {/* Option 1: NEFT/RTGS */}
          <div 
            onClick={() => setSelectedMethod('NEFT')}
            className={`${baseCardClass} ${selectedMethod === 'NEFT' ? selectedCardClass : unselectedCardClass}`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="block text-base font-semibold">Online Challan</span>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedMethod === 'NEFT' ? 'border-yellow-500' : 'border-zinc-300'}`}>
                {selectedMethod === 'NEFT' && <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>}
              </div>
            </div>
            <span className="text-sm font-medium mb-1">NEFT / RTGS</span>
            <span className="text-xs text-zinc-500 mt-auto pt-4">Generate virtual account details for direct bank-to-bank transfer.</span>
          </div>

          {/* Option 2: Payment Gateway */}
          <div 
            onClick={() => setSelectedMethod('PG')}
            className={`${baseCardClass} ${selectedMethod === 'PG' ? selectedCardClass : unselectedCardClass}`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="block text-base font-semibold">Online PG</span>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedMethod === 'PG' ? 'border-yellow-500' : 'border-zinc-300'}`}>
                {selectedMethod === 'PG' && <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>}
              </div>
            </div>
            <span className="text-sm font-medium mb-1">Payment Gateway</span>
            <span className="text-xs text-zinc-500 mt-auto pt-4">Instant payment via UPI, Credit/Debit Cards, or Net Banking.</span>
          </div>

          {/* Option 3: Offline Challan */}
          <div 
            onClick={() => setSelectedMethod('OFFLINE')}
            className={`${baseCardClass} ${selectedMethod === 'OFFLINE' ? selectedCardClass : unselectedCardClass}`}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="block text-base font-semibold">Offline Challan</span>
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedMethod === 'OFFLINE' ? 'border-yellow-500' : 'border-zinc-300'}`}>
                {selectedMethod === 'OFFLINE' && <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>}
              </div>
            </div>
            <span className="text-sm font-medium mb-1">Counter Payment</span>
            <span className="text-xs text-zinc-500 mt-auto pt-4">Generate a physical PDF to pay via Cash/DD at a branch.</span>
          </div>

        </div>

        {/* Dynamic Action Area based on Selection */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-[5px] p-6 min-h-[140px] flex flex-col justify-center">
          
          {!selectedMethod && (
            <div className="text-center text-zinc-500 text-sm">
              Please select a payment method above to proceed.
            </div>
          )}

          {selectedMethod === 'NEFT' && (
            <div className="flex flex-col items-center sm:flex-row sm:justify-between w-full gap-4">
              <div className="text-sm text-zinc-700 max-w-sm">
                <p className="font-semibold mb-1 text-black">Step 1 of 2: Generate Details</p>
                This will generate a unique Challan No. and Virtual Account Number for your NEFT/RTGS transfer.
              </div>
              <button className="whitespace-nowrap bg-yellow-500 text-black px-6 py-3 rounded-[5px] hover:bg-yellow-400 font-semibold transition-colors shadow-sm">
                Generate NEFT Details
              </button>
            </div>
          )}

          {selectedMethod === 'PG' && (
            <div className="flex flex-col items-center sm:flex-row sm:justify-between w-full gap-4">
              <div className="text-sm text-zinc-700 max-w-sm">
                <p className="font-semibold mb-1 text-black">Secure Redirect</p>
                You will be redirected to our secure partner gateway to complete the transaction instantly.
              </div>
              <button className="whitespace-nowrap bg-black text-yellow-500 px-6 py-3 rounded-[5px] hover:bg-zinc-800 font-semibold transition-colors shadow-sm">
                Proceed to Gateway &rarr;
              </button>
            </div>
          )}

          {selectedMethod === 'OFFLINE' && (
            <div className="flex flex-col items-center sm:flex-row sm:justify-between w-full gap-4">
              <div className="text-sm text-zinc-700 max-w-sm">
                <p className="font-semibold mb-1 text-black">Printable Document</p>
                Generate a PDF challan to submit along with your Cheque or Demand Draft at the designated bank branch.
              </div>
              <button className="whitespace-nowrap bg-zinc-200 text-black px-6 py-3 rounded-[5px] hover:bg-zinc-300 font-semibold transition-colors border border-zinc-300">
                Generate Offline PDF
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}