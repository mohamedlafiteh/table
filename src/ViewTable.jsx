import React from "react";

export default function ViewTable({ id, name, country, editRow }) {
  return (
    <div>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{country}</td>
        <td>
          <button onClick={() => editRow(id)}>Edit</button>
        </td>
      </tr>
    </div>
  );
}
