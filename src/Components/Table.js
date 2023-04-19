import React from "react";
import TableComponent from "./TableComponent";

const Table = ({ responseData }) => {
  return (
    <div className=" w-full relative ">
      <TableComponent responseData={responseData} />
    </div>
  );
};

export default Table;
