import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';

const Dropdown = ({ setSelectedAnimal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (animalType) => {
    setSelectedAnimal(animalType);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle" onClick={toggleDropdown} tabIndex="-1">
        Animal Types
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div key="dogs" className="dropdown-item" onClick={() => handleItemClick('Dogs')} tabIndex="-1">
            Dogs
          </div>
          <div key="cats" className="dropdown-item" onClick={() => handleItemClick('Cats')} tabIndex="-1">
            Cats
          </div>
          <div key="birds" className="dropdown-item" onClick={() => handleItemClick('Birds')} tabIndex="-1">
            Birds
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
