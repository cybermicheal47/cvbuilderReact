import React, { useState } from "react";

const Workform = () => {
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [description, setDescription] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      companyName,
      positionTitle,
      fromDate,
      toDate,
      description
    };
    setSubmittedData(formData);
    setEditMode(false);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  return (
    <div>
      <h3>Work Experience</h3>
      {!editMode ? (
        <div>
          <p>Company Name: {submittedData?.companyName}</p>
          <p>Position Title: {submittedData?.positionTitle}</p>
          <p>From: {submittedData?.fromDate}</p>
          <p>To: {submittedData?.toDate}</p>
          <p>Description: {submittedData?.description}</p>
          <button className="editbtn   hide-on-print"  onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-control">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Enter Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label>Position Title</label>
              <input
                type="text"
                placeholder="Enter Position Title"
                value={positionTitle}
                onChange={(e) => setPositionTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-control">
              <label>From</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label>To</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>
          <div className="form-control">
            <label>Description Of Your Job</label>
            <textarea
              placeholder="Main activities and others"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <input type="submit" value="Save" className="btn btn-block" />
        </form>
      )}
    </div>
  );
};

export default Workform;
