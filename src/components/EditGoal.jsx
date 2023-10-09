import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { useUpdateGoalMutation } from "../app/features/goalsAPI";
import { setNotification } from "../app/features/notificationSlice";

const EditGoal = ({ goal, closeEditForm }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  // state variables
  const [title, setTitle] = useState(goal.title);
  const [description, setDescription] = useState(goal.description);

  // RTK Query Mutations
  const [editGoal] = useUpdateGoalMutation();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    editGoal({ id: goal.id, title, description });
    closeEditForm();
    dispatch(
      setNotification({
        heading: "Edited",
        message: "Your goal has been edited successfully",
        type: "success",
      })
    );
  };

  useEffect(() => {
    inputRef.current.select();
  }, []);

  return (
    <>
      <form
        className="bg-body-tertiary shadow p-3 rounded"
        onSubmit={handleFormSubmit}
      >
        <fieldset className="form mb-2">
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>

        <fieldset className="form mb-2">
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </fieldset>
        <button className="btn btn-outline-success btn-sm me-2">Save</button>
        <button
          type="button"
          className="btn btn-outline-danger btn-sm"
          onClick={closeEditForm}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default EditGoal;
