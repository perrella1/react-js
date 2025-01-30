import React from 'react'


const TableHeader = ({onColumnClick}) => {

  return (
  <thead>
    <tr>
        <th onClick={() => onColumnClick("Nome")}>Nome</th>
        <th onClick={() => onColumnClick("Idade")}>Idade</th>
        <th onClick={() => onColumnClick("Cargo")}>Cargo</th>
    </tr>
  </thead>
  );
}

export default TableHeader
