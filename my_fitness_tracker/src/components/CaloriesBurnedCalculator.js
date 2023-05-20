import React, { useState } from 'react';

const CaloriesBurnedCalculator = () => {
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const calculateCaloriesBurned = (duration, intensity) => {
    const calculatedCalories = duration * intensity;
    setCaloriesBurned(calculatedCalories);
  };

  return (
    <div>
      <h2>Calories Burned: {caloriesBurned}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateCaloriesBurned(e.target.duration.value, e.target.intensity.value);
        }}
      >
        <label>
          Duration (minutes):
          <input type="number" name="duration" required />
        </label>
        <label>
          Intensity:
          <input type="number" name="intensity" required />
        </label>
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default CaloriesBurnedCalculator;
