import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ActivityProvider } from './components/ActivityContext';
import ActivityForm from './components/ActivityForm';
import GoalSettingForm from './components/GoalSettingForm';
import ProgressTracker from './components/ProgressTracker';
import Insights from './components/Insights';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <ActivityProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/log-activity" element={<ActivityForm />} />
          <Route path="/set-goals" element={<GoalSettingForm />} />
          <Route path="/progress" element={<ProgressTracker />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </Router>
    </ActivityProvider>
  );
};

export default App;
