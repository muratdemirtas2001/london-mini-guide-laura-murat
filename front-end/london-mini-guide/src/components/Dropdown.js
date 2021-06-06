import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const DropdownCities = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Select a city</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Harrow</DropdownItem>
        <DropdownItem>Stratford</DropdownItem>
        <DropdownItem>Heathrow</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownCities;
