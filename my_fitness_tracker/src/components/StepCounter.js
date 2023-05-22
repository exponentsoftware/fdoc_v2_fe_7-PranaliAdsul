import React, { useState } from 'react';

const StepCounter = () => {
  const [stepCount, setStepCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStepIncrement = () => {
    const newStepCount = stepCount + parseInt(inputValue);
    setStepCount(newStepCount);
    setInputValue('');
  };

  const handleStepReset = () => {
    setStepCount(0);
    setInputValue('');
  };

  return (
    <div style={styles.container}>
      <h2>Steps Taken: {stepCount}</h2>
      <div style={styles.formContainer}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter step count"
          style={styles.input}
        />
        <div style={styles.buttonContainer}>
          <button onClick={handleStepIncrement} style={styles.button}>
            Add Steps
          </button>
          <button onClick={handleStepReset} style={styles.button}>
            Reset Steps
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#dcf5f4',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
  },
  formContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridGap: '10px',
    alignItems: 'center',
    marginTop: '20px',
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    padding: '8px 16px',
    borderRadius: '5px',
    backgroundColor: '#ff5722',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
  },
};

export default StepCounter;
