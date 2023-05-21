import React, { useState } from 'react';

const GoalSettingForm = ({ setGoals }) => {
  const [stepGoal, setStepGoal] = useState('');
  const [calorieGoal, setCalorieGoal] = useState('');
  const [activeMinuteGoal, setActiveMinuteGoal] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setGoals({
      stepGoal: parseInt(stepGoal),
      calorieGoal: parseInt(calorieGoal),
      activeMinuteGoal: parseInt(activeMinuteGoal),
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Set Goals</h2>
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
