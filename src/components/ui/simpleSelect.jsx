import React, { useState, useEffect } from 'react';

const SimpleSelect = ({ options, placeholder, onSelect, className, key }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [isValidSelection, setIsValidSelection] = useState(true);

  // useEffect(() => {
  //   // Reset selectedOption if it's not a valid selection
  //   if (!isValidSelection) {
  //     setSelectedOption(null);
  //   }
  // }, [isValidSelection]);

  useEffect(() => {
    setSelectedOption(null);
  }, [key]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect && onSelect(option);
    closeMenu();
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <div className={`relative ${className}`}>
      <div
        className="cursor-pointer border border-input bg-transparent px-3 py-2 text-sm shadow-sm rounded-md flex items-center justify-between"
        onClick={toggleMenu}
      >
        {selectedOption !==null ? (
          <span>{selectedOption.label}</span>
        ) : (
          <span className="text-muted-foreground">{placeholder}</span>
        )}
        <span className="h-4 w-4 opacity-50">&#9660;</span>
      </div>
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className="cursor-pointer py-1.5 px-2 hover:bg-gray-100 text-black"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimpleSelect;
