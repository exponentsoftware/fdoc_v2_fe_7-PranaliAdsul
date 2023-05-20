import React, { createContext, useState } from 'react';

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  const deleteActivity = (activityId) => {
    setActivities(activities.filter((activity) => activity.id !== activityId));
  };
  
  return (
    <ActivityContext.Provider value={{ activities, addActivity, deleteActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContext;