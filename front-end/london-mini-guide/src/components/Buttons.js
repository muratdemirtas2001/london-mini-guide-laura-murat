import React, { useState } from "react";
import { Button } from "reactstrap";

const Buttons = ({ setSection, setDataToRender }) => {
  return (
    <div className="mt-4 mx-10">
      <Button
        outline
        color="primary"
        value="pharmacies"
        onClick={(e) => setSection(e.target.value)}
      >
        Pharmacies
      </Button>{" "}
      <Button
        outline
        color="primary"
        value="colleges"
        onClick={(e) => setSection(e.target.value)}
      >
        Schools-colleges
      </Button>{" "}
      <Button
        outline
        color="primary"
        value="hospitals"
        onClick={(e) => setSection(e.target.value)}
      >
        Hospitals
      </Button>{" "}
      <Button
        outline
        color="primary"
        value="doctors"
        onClick={(e) => setSection(e.target.value)}
      >
        Doctors
      </Button>{" "}
    </div>
  );
};

export default Buttons;
