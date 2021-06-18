import "./App.css";
import { useEffect, useState } from "react";
import Heading from "./components/Heading";
import DropdownCities from "./components/Dropdown";
import Buttons from "./components/Buttons";
import Tables from "./components/Tables";
import harrow from "./components/Harrow.json";
import stratford from "./components/Stratford.json";
import heathrow from "./components/Heathrow.json";

function App() {
  const cityData = {
    harrow,
    stratford,
    heathrow,
  };
  const [city, setCity] = useState();
  const [section, setSection] = useState();
  const [dataToRender, setDataToRender] = useState();

  useEffect(() => {
    if (city !== undefined && section !== undefined) {
      setDataToRender(cityData[city][section]);
    }
  }, [city,section,cityData]);

  return (
    <div>
      <Heading />
      <DropdownCities setCity={setCity} />
      <Buttons setSection={setSection} setDataToRender={setDataToRender} />
      <Tables dataToRender={dataToRender} city={city} section={section} />
    </div>
  );
}

export default App;
