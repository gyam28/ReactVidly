import React from "react";
import TablesHeader from "./tableheader";
import TableBody from "./tablebody";

const Table = ({ columns, sortColumn, onSort, data }) => {
  return (
    <table className="table table-hover">
      <TablesHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
