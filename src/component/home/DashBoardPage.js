import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { employee } from "../jsonFiles/EmployeeDetails";

class DashBoardPage extends Component {
  render() {
    return (
      <div>
        <h2>EmployeeList</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>age</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>email</TableCell>
              <TableCell>phoneNo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employee.user.map((employe, i) => (
              <TableRow key={i}>
                <TableCell>{employe.id}</TableCell>
                <TableCell>{employe.name}</TableCell>
                <TableCell>{employe.age}</TableCell>
                <TableCell>{employe.gender}</TableCell>
                <TableCell>{employe.email}</TableCell>
                <TableCell>{employe.phoneNo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default DashBoardPage;
