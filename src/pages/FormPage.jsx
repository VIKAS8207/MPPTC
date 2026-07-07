import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormHeader from '../components/common/FormHeader';
import CustomDropdown from '../components/common/CustomDropdown';

export default function FormPage() {
  const navigate = useNavigate();
  
  // State handlers
  const [natureOfWork, setNatureOfWork] = useState('');
  const [accessType, setAccessType] = useState('');
  const [demandAuthority, setDemandAuthority] = useState('');
  const [discomRegion, setDiscomRegion] = useState(''); // Added for Discom Region

  // Dropdown Options Data
  const natureOptions = [
    { value: 'Transmission Line Construction', label: 'Transmission Line Construction' },
    { value: 'Mod./shifting of Transmission Line', label: 'Mod./shifting of Transmission Line' },
    { value: 'Construction of Substation/Feeder bays/Transformers', label: 'Construction of Substation/Feeder bays/Transformers' },
    { value: 'Supply Affording Charges(SAC)', label: 'Supply Affording Charges (SAC)' },
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

  // Added Discom Region Options
  const discomOptions = [
    { value: 'MPPKVVCL', label: 'MPPKVVCL (Indore)' },
    { value: 'MPMKVVCL', label: 'MPMKVVCL (Bhopal)' },
    { value: 'MPEZCL', label: 'MPEZCL (Jabalpur)' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment');
  };

  // Reusable input class for consistency
  const inputBaseClass = "w-full border border-zinc-300 rounded-[5px] px-3 py-2 text-sm focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500";

  return (
    <div className="flex-grow flex flex-col justify-center max-w-5xl mx-auto w-full py-10 px-4">
      
      {/* Extracted Header Component */}
      <FormHeader />
      
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-[5px] border border-zinc-200 shadow-xl text-zinc-900"
      >
        {/* --- SECTION 1: WORK DETAILS --- */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-4">1. Work Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="flex flex-col space-y-3 md:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <label className="block text-sm font-medium mb-1">Nature of work*</label>
                  <CustomDropdown 
                    options={natureOptions} 
                    value={natureOfWork} 
                    onChange={setNatureOfWork} 
                    placeholder="Select nature of work..." 
                  />
                </div>
                
                {natureOfWork === 'Others' && (
                  <div>
                    <label className="block text-sm font-medium mb-1">Specify Other Work*</label>
                    <input type="text" required placeholder="Please specify..." className={inputBaseClass} />
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Access Type (LTOA / MTOA)*</label>
              <CustomDropdown 
                options={accessOptions} 
                value={accessType} 
                onChange={setAccessType} 
                placeholder="Select Access Type..." 
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Complete Name of Work*</label>
              <input type="text" required className={inputBaseClass} />
            </div>

            {/* Added: Contract Demand and Discom Region */}
            <div>
              <label className="block text-sm font-medium mb-1">Contract Demand (kVA)*</label>
              <input type="number" required placeholder="e.g., 500" className={inputBaseClass} />
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
            {/* End Added Fields */}

            <div>
              <label className="block text-sm font-medium mb-1">Reference no. & date of demand letter (MPPTCL)*</label>
              <input type="text" required placeholder="e.g., REF-123 / 2026-05-12" className={inputBaseClass} />
            </div>
            
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
                  <input type="text" required placeholder="Enter full authority name" className={inputBaseClass} />
                </div>
              )}
            </div>

          </div>
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
            className="bg-yellow-500 text-black px-8 py-3 rounded-[5px] hover:bg-yellow-400 font-semibold transition-colors shadow-sm"
          >
            Submit & Proceed to Payment
          </button>
        </div>

      </form>
    </div>
  );
}