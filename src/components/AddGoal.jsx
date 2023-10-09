import { useState, useRef, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { useAddGoalMutation } from "../app/features/goalsAPI";
import { setNotification } from "../app/features/notificationSlice";

export default function Addgoal() {
  const dispatch = useDispatch();
  const inputRef = useRef();

  // State variables
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // RTK Query Mutations
  const [addGoal, { isLoading }] = useAddGoalMutation();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newGoal = { title, description, id: nanoid() };
    const notification = {
      heading: "Well done!",
      message: "A new goal has been added successfully",
      type: "success",
    };

    addGoal(newGoal);
    dispatch(setNotification(notification));

    setTitle("");
    setDescription("");
  };

  // focus on input on page load
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white border-2 p-4 shadow-lg rounded mx-auto my-4"
      style={{ maxWidth: "800px" }}
    >
      <fieldset className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Insert goal title"
          ref={inputRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="title" className="text-secondary">
          Goal Title
        </label>
      </fieldset>

      <fieldset className="form mb-3">
        <textarea
          className="form-control"
          placeholder="Describe your goal here"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </fieldset>
      <button className="btn btn-primary" disabled={!(title && description)}>
        {isLoading ? (
          <>
            <span
              class="spinner-border spinner-border-sm me-1"
              role="status"
              aria-hidden="true"
            ></span>
            <span>Adding New Goal</span>
          </>
        ) : (
          "Add goal"
        )}
      </button>
    </form>
  );
}
