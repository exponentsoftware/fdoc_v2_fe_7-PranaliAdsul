import React, { useState, useContext } from 'react';
import { ActivityContext } from './ActivityContext';

const ActivityForm = () => {
  const { addActivity } = useContext(ActivityContext);

  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newActivity = {
      id: Date.now(),
      type: activityType,
      duration,
      intensity,
    };

    addActivity(newActivity);

    setActivityType('');
    setDuration('');
    setIntensity('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Log Activity</h2>
      <label>
        Activity Type:
        <input type="text" value={activityType} onChange={(e) => setActivityType(e.target.value)} />
      </label>
      <label>
        Duration:
        <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </label>
      <label>
        Intensity:
        <input type="text" value={intensity} onChange={(e) => setIntensity(e.target.value)} />
      </label>
      <button type="submit">Log Activity</button>
    </form>
  );
};

export default ActivityForm;
