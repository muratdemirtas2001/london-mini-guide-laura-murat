import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropdownCities = ({setCity}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = (e) => {
    setDropdownOpen((prevState) => !prevState)};

  return (
    <Dropdown
      isOpen={dropdownOpen}
      toggle={toggle}
    >
      <DropdownToggle caret>Select a city</DropdownToggle>
      <DropdownMenu onClick={(e)=>setCity(e.target.value)}>
        <DropdownItem value="harrow">Harrow</DropdownItem>
        <DropdownItem value="stratford">Stratford</DropdownItem>
        <DropdownItem value="heathrow">Heathrow</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownCities;
