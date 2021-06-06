// import React from "react";
// function Buttons() {
//   return <h1>buttons</h1>;
// }

// export default Buttons;

import React from "react";
import { Button } from "reactstrap";

const Buttons = (props) => {
  return (
    <div className="mt-4 mx-10">
      <Button outline color="primary">
        Pharmacies
      </Button>{" "}
      <Button outline color="primary">
        Schools-colleges
      </Button>{" "}
      <Button outline color="primary">
        Hospitals
      </Button>{" "}
      <Button outline color="primary">
        Doctors
      </Button>{" "}
    </div>
  );
};

export default Buttons;
