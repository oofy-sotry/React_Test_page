import React, { useState } from "react";
import Sidebar from './Sidebar';
import { observer } from 'mobx-react-lite';
import Select from "../../components/select";
import Dropdown from "../../components/dropdown";
import DropDownOptionStore from "../../components/dropdownoptionstore";

const selectOptions = ['선택해주세요','Search42_test_01', 'Search42_test_02', 'Search42_test_03'];

const Main = observer(() => {
  const [selectedOption, setSelectedOption] = useState<string>(selectOptions[0]);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const handleSelectChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
    setDropdownVisible(selectedValue !== selectOptions[0]);

    // 저장된 데이터를 콘솔에 출력
    console.log("Selected option:", selectedValue);
  };

  const handleDropdownSelect = (selectedValue: string) => {
    setSelectedOption(selectedValue);
    setDropdownVisible(true);
    // 선택한 옵션을 DropDownOptionStore에 저장
    DropDownOptionStore.setDropdownOptions([selectedValue]);
    // 저장된 데이터를 콘솔에 출력
    console.log("DropDownOptionStore data:", DropDownOptionStore.dropdownOptions);
  };

  const dropdownOptions = ['색인추가','데이터조회','스키마','검색설정','설정'];

  const title = selectedOption;

  return (
    <Sidebar>
      <Select options={selectOptions} onChange={handleSelectChange} />
      {dropdownVisible && (
        <Dropdown dropdowntext={title} options={dropdownOptions} onSelect={handleDropdownSelect} />
      )}     
    </Sidebar>
  );
});



export default Main;
