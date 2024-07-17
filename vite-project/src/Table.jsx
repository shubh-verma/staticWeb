import React from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((fetchName, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{fetchName.id}</th>
                  <td>{fetchName.login}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
