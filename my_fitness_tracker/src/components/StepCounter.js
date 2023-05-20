import React, { useState } from 'react';

const StepCounter = () => {
  const [stepCount, setStepCount] = useState(0);

  const handleStepReset = () => {
    setStepCount(0);
  };

  return (
    <div>
      <h2>Steps Taken: {stepCount}</h2>
      <button onClick={handleStepReset}>Reset Steps</button>
    </div>
  );
};

export default StepCounter;
