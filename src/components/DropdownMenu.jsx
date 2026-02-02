import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ label, sections, isOpen, onClose }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div 
      className="relative group"
      onMouseLeave={() => {
        onClose();
        setOpenSubMenu(null);
        setHoveredItem(null);
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
        <div className="absolute left-0 mt-0 w-80 bg-white dark:bg-charcoal rounded-2xl shadow-2xl border border-charcoal/10 dark:border-sandstone/10 py-6 animate-fade-in z-50">
          {sections.map((section, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              <h3 className="text-xs uppercase tracking-widest font-bold text-charcoal dark:text-sandstone px-6 mb-3">
                {section.title}
              </h3>
              
              {/* Main Overview Link (if exists) */}
              {section.main && (
                <Link
                  to={section.main.path}
                  className="block px-6 py-4 mb-2 bg-taupe/20 dark:bg-charcoal-light hover:bg-taupe/40 dark:hover:bg-charcoal-light/80 transition-colors duration-200 mx-3 rounded-xl"
                  onClick={onClose}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-2xl text-[#2F4538] dark:text-[#C9D8BF]">
                      {section.icon || 'arrow_forward'}
                    </span>
                    <span className="text-sm font-medium text-charcoal dark:text-sandstone">
                      {section.main.name}
                    </span>
                  </div>
                </Link>
              )}
              
              <div className="space-y-0">
                {section.items.map((item, itemIdx) => {
                  const hasSubMenu = item.subItems && item.subItems.length > 0;
                  const uniqueKey = `${idx}-${itemIdx}`;
                  const isHovered = hoveredItem === uniqueKey;
                  
                  return (
                    <div 
                      key={itemIdx}
                      className="relative"
                      onMouseEnter={() => {
                        if (hasSubMenu) {
                          setHoveredItem(uniqueKey);
                          setOpenSubMenu(uniqueKey);
                        }
                      }}
                      onMouseLeave={() => {
                        if (hasSubMenu) {
                          setHoveredItem(null);
                          setOpenSubMenu(null);
                        }
                      }}
                    >
                      {hasSubMenu ? (
                        <>
                          <div className={`flex items-center justify-between px-6 py-3 text-sm cursor-pointer transition-colors duration-200 ${
                            isHovered 
                              ? 'text-charcoal dark:text-sandstone bg-taupe/30 dark:bg-charcoal-light' 
                              : 'text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone hover:bg-taupe/30 dark:hover:bg-charcoal-light'
                          }`}>
                            <div className="flex items-center gap-3">
                              {item.icon && (
                                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                              )}
                              <span>{item.name}</span>
                            </div>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                          
                          {/* Nested Submenu */}
                          {openSubMenu === uniqueKey && (
                            <div className="absolute left-full top-0 ml-2 w-72 bg-white dark:bg-charcoal rounded-2xl shadow-2xl border border-charcoal/10 dark:border-sandstone/10 py-4 animate-fade-in z-50">
                              <h4 className="text-xs uppercase tracking-widest font-bold text-charcoal dark:text-sandstone px-6 mb-3">
                                {item.name}
                              </h4>
                              <div className="space-y-0">
                                {item.subItems.map((subItem, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    to={subItem.path}
                                    className="block px-6 py-3 text-sm text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone hover:bg-taupe/30 dark:hover:bg-charcoal-light transition-colors duration-200"
                                    onClick={onClose}
                                  >
                                    <div className="flex items-center gap-3">
                                      {subItem.icon && (
                                        <span className="material-symbols-outlined text-lg opacity-70">{subItem.icon}</span>
                                      )}
                                      <span>{subItem.name}</span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          className="flex items-center gap-3 px-6 py-3 text-sm text-brown-grey dark:text-text-dark-muted hover:text-charcoal dark:hover:text-sandstone hover:bg-taupe/30 dark:hover:bg-charcoal-light transition-colors duration-200"
                          onClick={onClose}
                        >
                          {item.icon && (
                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                          )}
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
