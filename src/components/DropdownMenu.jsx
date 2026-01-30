import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ label, sections, isOpen, onClose }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <div 
      className="relative group"
      onMouseLeave={() => {
        onClose();
        setOpenSubMenu(null);
      }}
    >
      <button className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 flex items-center gap-1 ${
        isOpen
          ? 'text-charcoal dark:text-sandstone'
          : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone'
      }`}>
        {label}
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-0 w-72 bg-white dark:bg-charcoal rounded-2xl shadow-2xl border border-charcoal/10 dark:border-sandstone/10 py-6 animate-fade-in z-50">
          {sections.map((section, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              <h3 className="text-xs uppercase tracking-widest font-bold text-charcoal dark:text-sandstone px-6 mb-3">
                {section.title}
              </h3>
              <div className="space-y-0">
                {section.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    to={item.path}
                    className="block px-6 py-3 text-sm text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone hover:bg-taupe/30 dark:hover:bg-charcoal-light transition-colors duration-200"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
