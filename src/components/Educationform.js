import React, { useState } from 'react';

const Educationform = () => {
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      schoolName,
      titleOfStudy,
      fromDate,
      toDate,
    };
    setSubmittedData(formData);
    setEditMode(false)

    
  };

  const handleEdit = () => {
    setEditMode(true);

  };

  return (
    <div>
      <h3>Education</h3>
      {!editMode ? (
        <div>
          <p>School Name: {submittedData?.schoolName}</p>
          <p>Title: {submittedData?.titleOfStudy}</p>
          <p>From: {submittedData?.fromDate}</p>
          <p>To: {submittedData?.toDate}</p>
          <button className='editbtn  hide-on-print' onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-control">
              <label>School Name</label>
              <input
                type="text"
                placeholder="Enter School Name"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label>Title of Study</label>
              <input
                type="text"
                placeholder="Enter Title of Study"
                value={titleOfStudy}
                onChange={(e) => setTitleOfStudy(e.target.value)}
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

          <input type="submit" value="Save" className="btn btn-block" />
        </form>
      )}
    </div>
  );
};

export default Educationform;
