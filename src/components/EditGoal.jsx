import { useState } from 'react';

export default function EditGoal({ goal, onSubmit, cancelEdit }) {
  const [goalState, setGoalState] = useState({
    title: goal.title,
    description: goal.description,
  });

  const { title, description } = goalState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGoalState((prevGoal) => {
      return {
        ...prevGoal,
        [name]: value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(goal.id, title, description);
  };
  return (
    <form
      className="bg-body-tertiary shadow p-3 rounded"
      onSubmit={handleFormSubmit}
    >
      <fieldset className="form mb-2">
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </fieldset>

      <fieldset className="form mb-2">
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
        ></textarea>
      </fieldset>
      <button className="btn btn-outline-success btn-sm me-2">Save</button>
      <button className="btn btn-outline-danger btn-sm" onClick={cancelEdit}>
        Cancel
      </button>
    </form>
  );
}
