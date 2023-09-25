import { useState } from "react";
import { useDispatch } from "react-redux";
import { setNotification } from "../app/features/notificationSlice";
import Editgoal from "./EditGoal";
import { useDeleteGoalMutation } from "../app/features/goalsAPI";

export default function GoalDetails({ goal, className }) {
  const dispatch = useDispatch();

  const [showEditForm, setShowEditForm] = useState(false);

  const [deleteGoal] = useDeleteGoalMutation();

  const handleDeleteGoal = async () => {
    await deleteGoal(goal.id);
    dispatch(
      setNotification({
        heading: "Deleted",
        message: "The goal has been successfully deleted",
        type: "delete",
      })
    );
  };

  return (
    <div className={className}>
      {showEditForm ? (
        <Editgoal
          closeEditForm={() => setShowEditForm(false)}
          className={className}
          goal={goal}
        />
      ) : (
        <div className="card d-flex shadow-sm border-0 bg-body-tertiary">
          <div className="card-body position-relative">
            <div className="position-absolute end-0 p-2">
              <i
                className="bi bi-x-circle-fill text-danger "
                aria-label="delete-goal"
                onClick={handleDeleteGoal}
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
