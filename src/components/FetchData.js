import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";
function FetchData() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((res) => {
        console.log(res);
        setRowData(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const [columnDefs] = useState([
    { field: "cell" },
    { field: "dob" },
    { field: "email" },
    { field: "gender" },
    { field: "id" },
    { field: "location" },
    { field: "login" },
    { field: "name" },
    { field: "nat" },
    { field: "phone" },
    { field: "picture" },
    { field: "registered" },
  ]);
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}

export default FetchData;
