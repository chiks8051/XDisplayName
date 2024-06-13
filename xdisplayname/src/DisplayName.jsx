import React, { useState } from "react";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submit, setSubmit] = useState(false);

  const showFullName = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={showFullName}>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          id="fistName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <button type="submit" onClick={showFullName}>
          Submit
        </button>
      </form>
      {submit && (
        <div>
          <p>Full Name: {firstName} {lastName}</p>
        </div>
      )}
    </>
  );
};

export default DisplayName;
