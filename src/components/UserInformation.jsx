import React from "react";

export const UserInformation = ({ user }) => {
  // Default values if user or any property is undefined/null
  const { name = "N/A", age = "N/A", email = "N/A" } = user || {};

  return (
    <div className="user-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{age}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
    </div>

    
  );
};
