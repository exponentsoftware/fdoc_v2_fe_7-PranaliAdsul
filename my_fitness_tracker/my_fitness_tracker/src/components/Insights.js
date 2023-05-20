import React from 'react';

const Insights = () => {
  const insights = [
    {
      id: 1,
      title: 'Increase Your Step Count',
      description: 'You are currently below your daily step goal. Try to increase your steps to meet the goal.',
    },
    {
      id: 2,
      title: 'Explore New Activities',
      description: 'Add variety to your fitness routine by trying out different activities such as swimming or yoga.',
    },
  
  ];

  return (
    <div>
      <h2>Insights</h2>
      {insights.map((insight) => (
        <div key={insight.id}>
          <h3>{insight.title}</h3>
          <p>{insight.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Insights;
