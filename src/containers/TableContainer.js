import React from 'react';
import TableComponent from '../components/TableComponent';

const TableContainer = ({ userData, editRow, deleteData }) => {
  return (
    <TableComponent userData={userData} editRow={editRow} deleteData={deleteData} />
  );
};

export default TableContainer;
