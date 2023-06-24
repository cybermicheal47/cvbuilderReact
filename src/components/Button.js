import { useState } from 'react';

const ToggleFormButton = ({ formComponent, buttonText }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleFormVisibility = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const buttonStyle = {
    backgroundColor: '#f1f1f1',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px',
    width: '95%'
  };





  return (
    <div>
      <button  style={buttonStyle} className='hide-on-print' onClick={toggleFormVisibility}>
        {showForm ? 'Hide Form' : buttonText}
      </button>
      {showForm && formComponent}
    </div>
  );
};

export default ToggleFormButton;
