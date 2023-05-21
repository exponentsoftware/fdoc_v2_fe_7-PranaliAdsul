import React, { useState } from 'react';
import StepCounter from './StepCounter';
import CaloriesBurnedCalculator from './CaloriesBurnedCalculator';
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';
import GoalSettingForm from './GoalSettingForm';
import ProgressTracker from './ProgressTracker';
import Insights from './Insights';

const Dashboard = () => {
  const [goals, setGoals] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard</h1>
      <div style={styles.gridContainer}>
        <div style={styles.gridItem}>
          <StepCounter />
        </div>
        <div style={styles.gridItem}>
          <CaloriesBurnedCalculator />
        </div>
        <div style={styles.gridItem}>
          <ActivityForm />
        </div>
        <div style={styles.gridItem}>
          <ActivityList />
        </div>
        <div style={styles.gridItem}>
          <GoalSettingForm setGoals={setGoals} />
        </div>
        <div style={styles.gridItem}>
          <ProgressTracker />
        </div>
        <div style={styles.gridItem}>
          <Insights />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#ff5722',
    fontFamily: 'Arial, sans-serif',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gridGap: '10px',
    width: '90%',
    maxWidth: '1000px',
  },
  gridItem: {
    backgroundColor: '#ffe169',
    borderRadius: '10px',
    padding: '20px',
    color: '#000000',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    fontFamily: 'Arial, sans-serif',
  },
};

// Media queries for responsiveness
styles.gridContainer = {
  ...styles.gridContainer,
  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
  '@media (max-width: 480px)': {
    gridTemplateColumns: '1fr',
    gridGap: '10px',
  },
};

export default Dashboard;
