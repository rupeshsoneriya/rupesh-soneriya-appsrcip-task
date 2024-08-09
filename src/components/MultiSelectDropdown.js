import React, { useState } from "react";
import "../css/MultiSelectDropdown.css";
import dropdownopen from "../assets/down-arrow.png";
import closeIcon from "../assets/down-arrow (1).png";

const MultiSelectDropdown = ({
  options,
  buttonLable,
  selectedOptions,
  setSelectedOptions,
  setIsAllSelected,
  isAllSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedOptions((prevSelected) => {
      const newSelected = prevSelected.includes(value)
        ? prevSelected.filter((option) => option !== value)
        : [...prevSelected, value];
      return newSelected;
    });
  };

  const handleSelectAllChange = (event) => {
    if (event.target.checked) {
      setSelectedOptions(options);
      setIsAllSelected(true);
    } else {
      setSelectedOptions([]);
      setIsAllSelected(false);
    }
  };

  const handleOptionChange = () => {
    setIsAllSelected(selectedOptions.length === options.length);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {buttonLable}{" "}
        <span className="open-close-Icon">
          {!isOpen ? <img src={closeIcon} /> : <img src={dropdownopen} />}
        </span>
      </button>
      <label className="checkbox-container all">
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={handleSelectAllChange}
        />
        <span className="custom-checkbox"></span>
        <span className="all">All</span>
      </label>
      {isOpen && (
        <div className="dropdown-content">
          {options &&
            options.map((option) => (
              <label key={option} className="checkbox-container">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={(e) => {
                    handleCheckboxChange(e);
                    handleOptionChange();
                  }}
                />
                {option}
              </label>
            ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
