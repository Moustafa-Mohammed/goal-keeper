import { useState } from 'react';
import Editgoal from './EditGoal';

export default function GoalDetails({ goal, deleteGoal, editGoal, className }) {
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditGoal = (id, newTitle, newDescription) => {
    editGoal(id, newTitle, newDescription);
    setShowEditForm(false);
  };

  return (
    <div className={className}>
      {showEditForm ? (
        <Editgoal
          className={className}
          goal={goal}
          onSubmit={handleEditGoal}
          setShowEditForm={setShowEditForm}
          cancelEdit={() => setShowEditForm(false)}
        />
      ) : (
        <div className="card d-flex shadow-sm border-0 bg-body-tertiary">
          <div className="card-body position-relative">
            <div className="position-absolute end-0 p-2">
              <i
                className="bi bi-x-circle-fill text-danger "
                aria-label="delete-goal"
                onClick={() => deleteGoal(goal.id)}
                role="button"
              ></i>
              <i
                className="bi bi-pencil-square text-primary ms-2"
                role="button"
                onClick={() => setShowEditForm(true)}
              ></i>
            </div>
            <h5 className="card-title">{goal.title}</h5>
            <hr />
            <p className="card-text">{goal.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
