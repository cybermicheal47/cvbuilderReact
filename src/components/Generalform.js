import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      number
    };
    setSubmittedData(formData);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div>
      <h3>General Information</h3>
      {!editMode ? (
        <div>
           <p>
    <span className="label">First Name:   {submittedData?.firstName} </span> 
  </p>
  <p>
    <span className="label">Last Name:    {submittedData?.lastName} </span>
  </p>
  <p>
    <span className="label">Email Address:     {submittedData?.email} </span>
  </p>
  <p>
    <span className="label">Phone Number:    {submittedData?.number} </span> 
  </p>
          <button className="editbtn hide-on-print" onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-control">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-control">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <input type="submit" value="Save" className="btn btn-block" />
        </form>
      )}
    </div>
  );
};

export default Form;
