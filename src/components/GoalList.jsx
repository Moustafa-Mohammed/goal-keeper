import React from 'react';
import GoalDetails from './GoalDetails';

export default function goalList({ goals, deleteGoal, editGoal }) {
  const goalList = goals.map((goal, idx) => {
    return (
      <GoalDetails
        className={
          idx === 0 || (idx === goals.length - 1 && idx % 2 !== 0)
            ? 'col-12'
            : 'col-12 col-md-6'
        }
        key={goal.id}
        goal={goal}
        deleteGoal={deleteGoal}
        editGoal={editGoal}
      />
    );
  });

  if (goalList.length === 0) {
    return null;
  }

  return (
    <section
      className="container border rounded p-4 bg-white shadow-lg"
      style={{ maxWidth: '800px' }}
    >
      <div className="row g-4">{goalList}</div>
    </section>
  );
}
