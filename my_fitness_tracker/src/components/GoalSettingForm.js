import React, { useState } from 'react';

const GoalSettingForm = ({ setGoals }) => {
  const [stepGoal, setStepGoal] = useState('');
  const [calorieGoal, setCalorieGoal] = useState('');
  const [activeMinuteGoal, setActiveMinuteGoal] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if any goal field is empty
    if (!stepGoal || !calorieGoal || !activeMinuteGoal) {
      setError('Please fill in all the goal fields');
      return;
    }

    // Check if any goal field is not a number
    if (isNaN(stepGoal) || isNaN(calorieGoal) || isNaN(activeMinuteGoal)) {
      setError('Please enter valid numbers for the goal fields');
      return;
    }

    setGoals({
      stepGoal: parseInt(stepGoal),
      calorieGoal: parseInt(calorieGoal),
      activeMinuteGoal: parseInt(activeMinuteGoal),
    });

    // Clear the form and error state
    setStepGoal('');
    setCalorieGoal('');
    setActiveMinuteGoal('');
    setError('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Set Goals</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Step Goal:
        <input type="text" value={stepGoal} onChange={(e) => setStepGoal(e.target.value)} />
      </label>
      <label>
        Calorie Goal:
        <input type="text" value={calorieGoal} onChange={(e) => setCalorieGoal(e.target.value)} />
      </label>
      <label>
        Active Minute Goal:
        <input
          type="text"
          value={activeMinuteGoal}
          onChange={(e) => setActiveMinuteGoal(e.target.value)}
        />
      </label>
      <button type="submit">Set Goals</button>
    </form>
  );
};

export default GoalSettingForm;
