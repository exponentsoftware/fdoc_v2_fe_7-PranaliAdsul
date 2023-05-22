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
    <div style={styles.container}>
      <h2>Insights</h2>
      {insights.map((insight) => (
        <div key={insight.id} style={styles.insightItem}>
          <h3>{insight.title}</h3>
          <p>{insight.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
  },
  insightItem: {
    marginBottom: '20px',
    padding: '10px',
    backgroundColor: '#dcf5f4',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
};

// Media queries for responsiveness
styles.container = {
  ...styles.container,
  '@media (max-width: 768px)': {
    padding: '10px',
  },
};

export default Insights;
