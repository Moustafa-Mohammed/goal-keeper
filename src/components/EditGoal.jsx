import { useState, useEffect, useRef } from "react";
import { useUpdateGoalMutation } from "../app/features/goalsAPI";
import { useDispatch } from "react-redux";
import { setNotification } from "../app/features/notificationSlice";

const EditGoal = ({ goal, closeEditForm }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [goalState, setGoalState] = useState({
    title: goal.title,
    description: goal.description,
  });

  const [editGoal] = useUpdateGoalMutation();

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await editGoal({ id: goal.id, title, description });
    closeEditForm();
    dispatch(
      setNotification({
        heading: "Edited",
        message: "Your goal has been edited successfully",
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
