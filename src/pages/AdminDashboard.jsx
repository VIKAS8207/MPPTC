import { useState } from 'react';
import CustomDropdown from '../components/common/CustomDropdown';

export default function AdminDashboard() {
  // 1. Expanded Mock Data (Now includes all form fields for the detailed view)
  const allTransactions = [
    { 
      sno: "001", 
      customerName: "Global Tech Inc.", 
      customerNumber: "CUST-9921", 
      workName: "LTOA Access 500kVA Line", 
      date: "2026-07-06", 
      amount: "₹4,50,000", 
      paymentMode: "NEFT / RTGS", 
      status: "Pending Verification",
      natureOfWork: "Transmission Line Construction",
      contractDemand: "500",
      discomRegion: "MPPKVVCL",
      demandAuthority: "P&D",
      pan: "ABCDE1234F",
      gstin: "23ABCDE1234F1Z5",
      address: "123 Tech Park, Indore, MP, 452001",
      bankName: "HDFC Bank, Sector 18",
      accountNo: "00123456789",
      ifsc: "HDFC0001234"
    },
    { 
      sno: "002", 
      customerName: "Apex Industries", 
      customerNumber: "CUST-8832", 
      workName: "SAC Charge Phase 1", 
      date: "2026-07-07", 
      amount: "₹1,25,000", 
      paymentMode: "Online PG", 
      status: "Success",
      natureOfWork: "Supply Affording Charges(SAC)",
      contractDemand: "150",
      discomRegion: "MPMKVVCL",
      demandAuthority: "CRA",
      pan: "XYZEE9876G",
      gstin: "23XYZEE9876G2Z1",
      address: "45 Industrial Area, Bhopal, MP, 462023",
      bankName: "SBI, Main Branch",
      accountNo: "00987654321",
      ifsc: "SBIN0000123"
    },
    { 
      sno: "003", 
      customerName: "Urban Dev Corp", 
      customerNumber: "CUST-7743", 
      workName: "Substation Feeder Mod.", 
      date: "2026-07-07", 
      amount: "₹8,90,000", 
      paymentMode: "Offline Challan", 
      status: "Awaiting Cheque",
      natureOfWork: "Construction of Substation/Feeder bays",
      contractDemand: "1000",
      discomRegion: "MPEZCL",
      demandAuthority: "Others",
      pan: "LMNOP5555H",
      gstin: "23LMNOP5555H3Z8",
      address: "77 Civic Center, Jabalpur, MP, 482001",
      bankName: "ICICI Bank, Civil Lines",
      accountNo: "00555555555",
      ifsc: "ICIC0005555"
    }
  ];

  // 2. State for Filters and Modal
  const [paymentFilter, setPaymentFilter] = useState('All');
  const [selectedTrx, setSelectedTrx] = useState(null); // Holds the data for the modal

  // Options for the CustomDropdown filter
  const filterOptions = [
    { value: 'All', label: 'All Payment Modes' },
    { value: 'NEFT / RTGS', label: 'NEFT / RTGS' },
    { value: 'Online PG', label: 'Online PG' },
    { value: 'Offline Challan', label: 'Offline Challan' }
  ];

  // Apply the filter to the data
  const filteredTransactions = allTransactions.filter(trx => 
    paymentFilter === 'All' || trx.paymentMode === paymentFilter
  );

  return (
    <div className="flex-grow flex flex-col max-w-6xl mx-auto w-full py-10 px-4 relative">
      
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-light border-l-4 border-yellow-500 pl-4 text-black">
            Remittance Reports
          </h1>
          <p className="text-sm text-zinc-500 mt-2 pl-5">Overview of technical intake and financial processing.</p>
        </div>
      </div>

      {/* Action Bar (Filters & Export) */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-[5px] border border-zinc-200 shadow-sm mb-6 gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <span className="text-sm font-semibold text-zinc-700">Filter By:</span>
          <div className="w-64">
            <CustomDropdown 
              options={filterOptions}
              value={paymentFilter}
              onChange={setPaymentFilter}
              placeholder="Select Payment Mode"
            />
          </div>
        </div>
        
        <button className="bg-black text-white px-4 py-2 rounded-[5px] text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2 whitespace-nowrap">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-yellow-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Export CSV Report
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-[5px] border border-zinc-200 shadow-sm border-t-4 border-t-black">
          <div className="text-xs text-zinc-500 tracking-wide uppercase mb-1">Total PG Revenue</div>
          <div className="text-2xl font-semibold text-zinc-900">₹13,25,000</div>
        </div>
        <div className="bg-white p-6 rounded-[5px] border border-zinc-200 shadow-sm border-t-4 border-t-yellow-500">
          <div className="text-xs text-zinc-500 tracking-wide uppercase mb-1">Pending NEFT Verifications</div>
          <div className="text-2xl font-semibold text-zinc-900">12 Challans</div>
        </div>
        <div className="bg-white p-6 rounded-[5px] border border-zinc-200 shadow-sm border-t-4 border-t-zinc-400">
          <div className="text-xs text-zinc-500 tracking-wide uppercase mb-1">Offline Counter Cheques</div>
          <div className="text-2xl font-semibold text-zinc-900">5 Awaiting</div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-[5px] border border-zinc-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-600">
            <thead className="bg-zinc-50 text-zinc-800 border-b border-zinc-200">
              <tr>
                <th className="px-6 py-4 font-semibold">S.No</th>
                <th className="px-6 py-4 font-semibold">Name of Customer</th>
                <th className="px-6 py-4 font-semibold">Customer Number</th>
                <th className="px-6 py-4 font-semibold">Complete Name of Work</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Amount</th>
                <th className="px-6 py-4 font-semibold">Mode of Payment</th>
                <th className="px-6 py-4 font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((trx) => (
                <tr key={trx.sno} className="border-b border-zinc-100 hover:bg-zinc-50/80 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">{trx.sno}</td>
                  <td className="px-6 py-4 font-medium text-zinc-900">{trx.customerName}</td>
                  <td className="px-6 py-4 font-mono text-xs">{trx.customerNumber}</td>
                  <td className="px-6 py-4">{trx.workName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{trx.date}</td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap">{trx.amount}</td>
                  <td className="px-6 py-4 text-xs whitespace-nowrap">
                    <span className="bg-zinc-100 border border-zinc-200 px-2 py-1 rounded-[3px] text-zinc-700">
                      {trx.paymentMode}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    {/* View Details Eye Icon Button */}
                    <button 
                      onClick={() => setSelectedTrx(trx)}
                      className="p-2 text-zinc-400 hover:text-yellow-600 hover:bg-yellow-50 rounded-full transition-all"
                      title="View Details"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
              
              {filteredTransactions.length === 0 && (
                <tr>
                  <td colSpan="8" className="px-6 py-10 text-center text-zinc-500">
                    No transactions found for the selected filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Industrial Paper Modal Overlay */}
      {selectedTrx && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          
          {/* Paper Container */}
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#fdfbf7] border border-zinc-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2px] p-8 sm:p-10">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedTrx(null)}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-black transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Industrial Header */}
            <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-end">
              <div>
                <p className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase mb-1">Doc Ref: MPPTCL/INTAKE/{selectedTrx.sno}</p>
                <h2 className="font-serif text-3xl text-black font-semibold">Technical Demand Record</h2>
              </div>
              <div className="text-right">
                <div className="text-xs font-mono bg-yellow-100 text-yellow-800 border border-yellow-300 px-3 py-1 mb-1 inline-block uppercase tracking-wider">
                  {selectedTrx.status}
                </div>
                <p className="font-mono text-xs text-zinc-600">Dated: {selectedTrx.date}</p>
              </div>
            </div>

            {/* Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
              
              {/* Block 1: Customer */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-1 mb-3">Customer Entity</h3>
                <p className="font-mono text-black font-semibold text-base mb-1">{selectedTrx.customerName}</p>
                <p className="text-zinc-700 mb-1">ID: <span className="font-mono">{selectedTrx.customerNumber}</span></p>
                <p className="text-zinc-600">{selectedTrx.address}</p>
              </div>

              {/* Block 2: Financials */}
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-1 mb-3">Financial Remittance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-zinc-500">Demanded Amount</p>
                    <p className="font-mono text-lg text-black">{selectedTrx.amount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Payment Mode</p>
                    <p className="font-mono text-sm text-black mt-1">{selectedTrx.paymentMode}</p>
                  </div>
                </div>
              </div>

              {/* Block 3: Technical Details */}
              <div className="md:col-span-2 mt-4">
                <h3 className="font-bold text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-1 mb-3">Technical Work Parameters</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white border border-zinc-200 p-4 shadow-inner">
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wide">Nature of Work</p>
                    <p className="font-medium text-black mt-1">{selectedTrx.natureOfWork}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wide">Contract Demand</p>
                    <p className="font-mono font-medium text-black mt-1">{selectedTrx.contractDemand} kVA</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wide">Discom Region</p>
                    <p className="font-medium text-black mt-1">{selectedTrx.discomRegion}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-wide">Authority</p>
                    <p className="font-medium text-black mt-1">{selectedTrx.demandAuthority}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wide">Complete Name of Work</p>
                  <p className="font-medium text-black mt-1">{selectedTrx.workName}</p>
                </div>
              </div>

              {/* Block 4: Tax & Bank */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-4">
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-1 mb-3">Tax Identification</h3>
                  <p className="text-zinc-600 mb-1">PAN: <span className="font-mono text-black">{selectedTrx.pan}</span></p>
                  <p className="text-zinc-600">GSTIN: <span className="font-mono text-black">{selectedTrx.gstin}</span></p>
                </div>
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-1 mb-3">Deposition Bank Details</h3>
                  <p className="text-zinc-600 mb-1">{selectedTrx.bankName}</p>
                  <p className="text-zinc-600 mb-1">A/C: <span className="font-mono text-black">{selectedTrx.accountNo}</span></p>
                  <p className="text-zinc-600">IFSC: <span className="font-mono text-black">{selectedTrx.ifsc}</span></p>
                </div>
              </div>

            </div>

            {/* Print Action */}
            <div className="mt-10 pt-6 border-t border-dashed border-zinc-300 flex justify-end">
              <button className="bg-black text-white px-6 py-2 text-sm hover:bg-zinc-800 transition-colors flex items-center gap-2 font-mono uppercase tracking-widest">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                Print Record
              </button>
            </div>

          </div>
        </div>
      )}
      
    </div>
  );
}