import React from "react";
// import Harrow from "./Harrow.json";
import { Table } from "reactstrap";

const Tables = ({ dataToRender,city,section }) => {
  console.log(dataToRender);
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
        {dataToRender!==undefined &&
          dataToRender.map((pharmacy, index) => {
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
