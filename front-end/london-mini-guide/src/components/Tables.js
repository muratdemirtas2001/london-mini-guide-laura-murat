// import React from "react";
// function Tables() {
//   return <h1 className="text-center">tables</h1>;
// }

// export default Tables;

import React from "react";
import Harrow from "./Harrow.json";
import { Table } from "reactstrap";

console.log(Harrow.pharmacies);
const Tables = () => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Web-site</th>
        </tr>
      </thead>
      <tbody>
        {Harrow.pharmacies.map((pharmacy, index) => {
          return (
            <tr>
              <th scope="row">{index}</th>
              <td>{pharmacy.name}</td>
              <td>{pharmacy.phone}</td>
              <td>{pharmacy.address}</td>
              <td>
                <a href="{${pharmacy.website}}" target="_blank">
                  {pharmacy.website}
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tables;
