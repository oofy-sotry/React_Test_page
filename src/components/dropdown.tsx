import React, { useState } from "react";
import styled from "styled-components";

const StyledDropdownButton = styled.button`
  width: 85%;
  height: 40px;
  font-size: 16px;
  margin: 0 auto;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  border: 0;
  background-color: #d9d9d9;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledOptions = styled.div`
  list-style-type: none;
  width: 85%;
  padding: 0;
  margin: 0 auto;
  background-color: #d9d9d9;

  li {
    cursor: pointer;
    padding: 10px;
    background-color: #d9d9d9;

    &:hover {
      background-color: #eee;
    }
  }
`;

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  dropdowntext?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect, dropdowntext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string>(options[0]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    onSelect(option);
    setSelectedItem(option);
    setIsOpen(true);
  };

  return (
    <div>
      <StyledDropdownButton onClick={handleToggle}>
        {dropdowntext}
        {/* {isOpen ? "열림" : "닫힘"} */}
      </StyledDropdownButton>
      {isOpen && (
        <StyledOptions>
          {options.map((option) => (
            <li key={option} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </StyledOptions>
      )}
    </div>
  );
};

export default Dropdown;
