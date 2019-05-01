import React from "react";

const ContactsLists = props => {
  return (
    <table style={{ width: "50%", margin: "auto" }}>
      <tbody>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
        {props.contacts.map((el, i) => {
          return (
            <tr key={i}>
              <td>
                <img src={el.pictureUrl} width="50" />
              </td>
              <td>{el.name}</td>
              <td>{el.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => props.deleteContact(i)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactsLists;
