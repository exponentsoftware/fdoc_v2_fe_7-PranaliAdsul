import React, { useContext } from 'react';
import { ActivityContext } from './ActivityContext';

const ActivityList = () => {
  const { activities, deleteActivity } = useContext(ActivityContext);

  return (
    <div>
      <h2>Logged Activities</h2>
      {activities.length > 0 ? (
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              <span>Type: {activity.type}</span>
              <span>Duration: {activity.duration}</span>
              <span>Intensity: {activity.intensity}</span>
              <button onClick={() => deleteActivity(activity.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No activities logged yet.</p>
      )}
    </div>
  );
};

export default ActivityList;
    