import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormHeader from '../components/common/FormHeader';
import CustomDropdown from '../components/common/CustomDropdown';

export default function FormPage() {
  const navigate = useNavigate();
  
  // Base State handler
  const [natureOfWork, setNatureOfWork] = useState('');
  
  // Specific Field State handlers
  const [manualNature, setManualNature] = useState('');
  const [accessType, setAccessType] = useState('');
  const [gridConnectivity, setGridConnectivity] = useState('');
  const [contractDemand, setContractDemand] = useState('');
  const [discomRegion, setDiscomRegion] = useState('');
  const [demandAuthority, setDemandAuthority] = useState('');
  const [demandAuthorityManual, setDemandAuthorityManual] = useState('');

  // Dropdown Options Data (Updated per new requirements)
  const natureOptions = [
    { value: 'Transmission Line Construction', label: 'Transmission Line Construction' },
    { value: 'Open Access', label: 'Open Access' },
    { value: 'Technical Feasibility', label: 'Technical Feasibility' },
    { value: 'Others', label: 'Others' }
  ];

  const accessOptions = [
    { value: 'LTOA', label: 'LTOA (Long Term Open Access)' },
    { value: 'MTOA', label: 'MTOA (Medium Term Open Access)' },
    { value: 'STOA', label: 'STOA (Short Term Open Access)' },
    { value: 'NA', label: 'Not Applicable' }
  ];

  const authorityOptions = [
    { value: 'P&D', label: 'P&D' },
    { value: 'CRA', label: 'CRA' },
    { value: 'Others', label: 'Others' }
  ];

  const discomOptions = [
    { value: 'MPPKVVCL', label: 'MPPKVVCL (Indore)' },
    { value: 'MPMKVVCL', label: 'MPMKVVCL (Bhopal)' },
    { value: 'MPEZCL', label: 'MPEZCL (Jabalpur)' }
  ];

  const gridConnectivityOptions = [
    { value: 'Captive Plant', label: 'Captive Plant Synchronization' },
    { value: 'Rooftop Solar', label: 'Rooftop Solar Integration' },
    { value: 'Standard Grid Parallel', label: 'Standard Grid Parallel' }
  ];

  // Determine Active Role based directly on the primary dropdown
  const getActiveRole = () => {
    if (natureOfWork === 'Transmission Line Construction') return 1;
    if (natureOfWork === 'Open Access') return 2;
    if (natureOfWork === 'Technical Feasibility') return 3;
    if (natureOfWork === 'Others') return 4;
    return 0;
  };

  const currentRole = getActiveRole();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment');
  };

  // Reusable styling classes
  const inputBaseClass = "w-full border border-zinc-300 rounded-[5px] px-3 py-2 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 bg-white";
  const fileInputClass = "w-full border border-zinc-300 rounded-[5px] px-3 py-1.5 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 bg-white file:mr-4 file:py-1.5 file:px-4 file:rounded-[3px] file:border-0 file:text-xs file:font-semibold file:bg-zinc-100 file:text-zinc-700 hover:file:bg-yellow-50 hover:file:text-yellow-700 transition-all cursor-pointer text-zinc-500";

  return (
    <div className="flex-grow flex flex-col justify-center max-w-5xl mx-auto w-full py-10 px-4">
      
      <FormHeader />
      
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-[5px] border border-zinc-200 shadow-xl text-zinc-900"
      >
        {/* --- SECTION 1: WORK DETAILS --- */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-6">1. Work Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* Always rendered: Initial Nature of Work Selector - Now 1 column wide to be shorter */}
            <div>
              <label className="block text-sm font-medium mb-1">Nature of work*</label>
              <CustomDropdown 
                options={natureOptions} 
                value={natureOfWork} 
                onChange={setNatureOfWork} 
                placeholder="Select nature of work..." 
              />
            </div>
          </div>

          {/* SHARED: Complete Name of Work - Now explicitly full width (col-span-2) for all roles */}
              <div className="md:col-span-2 mb-4">
                <label className="block text-sm font-medium mb-1">Complete Name of Work*</label>
                <input type="text" required className={inputBaseClass} />
              </div>

          {/* DYNAMIC ROLE RENDERING */}
          {currentRole !== 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2">
              
              {/* --- ROLE 3 EXCLUSIVE: Grid Connectivity --- */}
              {currentRole === 3 && (
                <div>
                  <label className="block text-sm font-medium mb-1">Parallel Operation / Grid Connectivity*</label>
                  <CustomDropdown 
                    options={gridConnectivityOptions} 
                    value={gridConnectivity} 
                    onChange={setGridConnectivity} 
                    placeholder="Select Synchronization Type..." 
                  />
                </div>
              )}

              {/* --- ROLE 4 EXCLUSIVE: Specify Work --- */}
              {currentRole === 4 && (
                <div>
                  <label className="block text-sm font-medium mb-1">Specify Nature of Work*</label>
                  <input 
                    type="text" 
                    value={manualNature}
                    onChange={(e) => setManualNature(e.target.value)}
                    required 
                    placeholder="Please specify..." 
                    className={inputBaseClass} 
                  />
                </div>
              )}

              

              {/* --- ROLE 2 EXCLUSIVE: Access Type --- */}
              {currentRole === 2 && (
                <div>
                  <label className="block text-sm font-medium mb-1">Access Type (LTOA / MTOA)*</label>
                  <CustomDropdown 
                    options={accessOptions} 
                    value={accessType} 
                    onChange={setAccessType} 
                    placeholder="Select Access Type..." 
                  />
                </div>
              )}

              {/* --- ROLE 4 EXCLUSIVE: Demand & Discom --- */}
              {currentRole === 4 && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-1">Contract Demand (kVA)*</label>
                    <input 
                      type="number" 
                      value={contractDemand}
                      onChange={(e) => setContractDemand(e.target.value)}
                      required 
                      placeholder="e.g., 500" 
                      className={inputBaseClass} 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Discom Region*</label>
                    <CustomDropdown 
                      options={discomOptions} 
                      value={discomRegion} 
                      onChange={setDiscomRegion} 
                      placeholder="Select Discom Region..." 
                    />
                  </div>
                </>
              )}

              {/* SHARED: Reference No & Date */}
              <div>
                <label className="block text-sm font-medium mb-1">Reference no. & date of demand letter (MPPTCL)*</label>
                <input type="text" required placeholder="e.g., REF-123 / 2026-05-12" className={inputBaseClass} />
              </div>

              {/* SHARED: Reference Document File Upload */}
              <div>
                <label className="block text-sm font-medium mb-1">Reference Document*</label>
                <input 
                  type="file" 
                  required 
                  accept=".pdf,.doc,.docx,.png,.jpg"
                  className={fileInputClass} 
                />
              </div>

              {/* SHARED: Demand Authority */}
              <div className="flex flex-col space-y-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Demand raising authority*</label>
                  <CustomDropdown 
                    options={authorityOptions} 
                    value={demandAuthority} 
                    onChange={setDemandAuthority} 
                    placeholder="Select Authority..." 
                  />
                </div>
                
                {demandAuthority === 'Others' && (
                  <div className="mt-2">
                    <label className="block text-xs font-medium mb-1 text-zinc-600">Specify Authority Name*</label>
                    <input 
                      type="text" 
                      value={demandAuthorityManual}
                      onChange={(e) => setDemandAuthorityManual(e.target.value)}
                      required 
                      placeholder="Enter full authority name" 
                      className={inputBaseClass} 
                    />
                  </div>
                )}
              </div>

            </div>
          )}
        </div>

        {/* --- SECTION 2: CUSTOMER INFORMATION --- */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-4">2. Customer Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name of Customer*</label>
              <input type="text" required className={inputBaseClass} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Customer Number</label>
              <input type="text" className={inputBaseClass} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Mobile Number*</label>
              <input type="tel" required className={inputBaseClass} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-Mail Address*</label>
              <input type="email" required className={inputBaseClass} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">PAN No.*</label>
              <input type="text" required className={`${inputBaseClass} uppercase`} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">GSTIN No.*</label>
              <input type="text" required className={`${inputBaseClass} uppercase`} />
            </div>
          </div>

          <div className="bg-zinc-50 p-4 rounded-[5px] border border-zinc-200">
            <h3 className="text-sm font-semibold mb-4 text-zinc-700">Complete Correspondence Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1">House Number</label>
                <input type="text" className={inputBaseClass} />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">City</label>
                <input type="text" className={inputBaseClass} />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">District</label>
                <input type="text" className={inputBaseClass} />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Postal Code</label>
                <input type="text" className={inputBaseClass} />
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 3: FINANCIAL & BANK DETAILS --- */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-4">3. Financial Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-1">Demanded Amount*</label>
              <input type="number" required className={inputBaseClass} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Amount Deposited*</label>
              <input type="number" required className={inputBaseClass} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Particulars of Deposition*</label>
              <input type="text" required className={inputBaseClass} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">TDS Deducted (if any)*</label>
              <input type="number" required className={inputBaseClass} />
            </div>
          </div>

          <div className="bg-zinc-50 p-4 rounded-[5px] border border-zinc-200">
            <h3 className="text-sm font-semibold mb-4 text-zinc-700">Bank A/C Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1">Account Holder Name (As per A/c)*</label>
                <input type="text" required className={inputBaseClass} />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Account Number*</label>
                <input type="text" required className={inputBaseClass} />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Name of Bank & Branch*</label>
                <input type="text" required className={inputBaseClass} />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">IFSC Code*</label>
                <input type="text" required className={`${inputBaseClass} uppercase`} />
              </div>
            </div>
          </div>
        </div>

        {/* --- SUBMIT --- */}
        <div className="flex justify-end pt-6 border-t border-zinc-200">
          <button 
            type="submit"
            disabled={currentRole === 0}
            className={`px-8 py-3 rounded-[5px] font-semibold transition-colors shadow-sm ${
              currentRole === 0 
                ? 'bg-zinc-200 text-zinc-400 cursor-not-allowed' 
                : 'bg-yellow-500 text-black hover:bg-yellow-400'
            }`}
          >
            Submit & Proceed to Payment
          </button>
        </div>

      </form>
    </div>
  );
}