import React, { ChangeEvent } from 'react';
import { styled } from "styled-components";

export const StyledSelect = styled.select`
  width: 90%; 
  height: 40px;
  font-size: 16px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom:20px;
  text-align: center;
  background-color: #D9D9D9		
  `;

interface SelectProps {
  options: string[];
  onChange: (selectedValue: string) => void;
}


const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <StyledSelect onChange={handleSelectChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
