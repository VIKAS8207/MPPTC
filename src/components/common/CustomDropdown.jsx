import { useState, useRef, useEffect } from 'react';

export default function CustomDropdown({ options, value, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking anywhere outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Find the label for the currently selected value
  const selectedLabel = options.find(opt => opt.value === value)?.label;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white border ${isOpen ? 'border-yellow-500 ring-1 ring-yellow-500' : 'border-zinc-300'} rounded-[5px] px-3 py-2 text-sm text-left focus:outline-none transition-all flex items-center justify-between group`}
      >
        <span className={selectedLabel ? "text-zinc-900" : "text-zinc-500"}>
          {selectedLabel || placeholder}
        </span>
        
        {/* Custom Arrow - Inset from the edge and perfectly aligned */}
        <div className="flex items-center justify-center pl-3 pr-1">
          <svg 
            className={`w-4 h-4 text-zinc-400 group-hover:text-yellow-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu List */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-zinc-200 rounded-[5px] shadow-xl max-h-60 overflow-y-auto py-1">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="px-3 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-black cursor-pointer transition-colors border-b border-zinc-100 last:border-none"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}