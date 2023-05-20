import React from 'react';
import StepCounter from './StepCounter';
import CaloriesBurnedCalculator from './CaloriesBurnedCalculator';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';
import GoalSettingForm from './GoalSettingForm';
import ProgressTracker from './ProgressTracker';
import Insights from './Insights';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <StepCounter />
      <CaloriesBurnedCalculator />
      <ActivityForm />
      <ActivityList />
      <GoalSettingForm />
      <ProgressTracker />
      <Insights />
    </div>
  );
};

export default Dashboard;
