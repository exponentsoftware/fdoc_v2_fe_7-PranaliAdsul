import React, { useContext } from 'react';
import { ActivityContext } from './ActivityContext';

const ProgressTracker = () => {
  const { activities } = useContext(ActivityContext);

  // Assuming you have stored goals in the state or context
  const stepGoal = 10000;
  const calorieGoal = 500;
  const activeMinuteGoal = 30;

  // Calculate total steps, calories burned, and active minutes from logged activities
  const totalSteps = activities.reduce((acc, activity) => acc + parseInt(activity.steps), 0);
  const totalCaloriesBurned = activities.reduce((acc, activity) => acc + parseInt(activity.caloriesBurned), 0);
  const totalActiveMinutes = activities.reduce((acc, activity) => acc + parseInt(activity.activeMinutes), 0);

  // Calculate progress percentage for each goal
  const stepProgress = (totalSteps / stepGoal) * 100;
  const calorieProgress = (totalCaloriesBurned / calorieGoal) * 100;
  const activeMinuteProgress = (totalActiveMinutes / activeMinuteGoal) * 100;

  return (
    <div>
      <h2>Progress Tracker</h2>
      <div>
        <h3>Step Goal Progress</h3>
        <p>{`${totalSteps} steps taken`}</p>
        <progress value={totalSteps} max={stepGoal}></progress>
        <span>{`${Math.round(stepProgress)}%`}</span>
      </div>
      <div>
        <h3>Calorie Goal Progress</h3>
        <p>{`${totalCaloriesBurned} calories burned`}</p>
        <progress value={totalCaloriesBurned} max={calorieGoal}></progress>
        <span>{`${Math.round(calorieProgress)}%`}</span>
      </div>
      <div>
        <h3>Active Minute Goal Progress</h3>
        <p>{`${totalActiveMinutes} active minutes`}</p>
        <progress value={totalActiveMinutes} max={activeMinuteGoal}></progress>
        <span>{`${Math.round(activeMinuteProgress)}%`}</span>
      </div>
    </div>
  );
};

export default ProgressTracker;
