import { useEffect, useState } from 'react';
import axios from 'axios';
import AddGoal from './components/AddGoal';
import GoalList from './components/GoalList';

function App() {
  const [showNotification, setShowNotification] = useState(false);

  const [goals, setGoals] = useState([]);

  const getGoals = async () => {
    const response = await axios.get('http://localhost:3001/goals');

    setGoals(response.data);
  };

  useEffect(() => {
    getGoals();
  }, []);

  const addGoal = async (title, description) => {
    const response = await axios.post('http://localhost:3001/goals', {
      title,
      description,
    });

    setGoals((prevgoals) => {
      return [response.data, ...prevgoals];
    });
    setShowNotification(true);
  };

  const editGoal = async (id, title, description) => {
    const response = await axios.put(`http://localhost:3001/goals/${id}`, {
      title,
      description,
    });

    const updatedGoals = goals.map((goal) => {
      if (goal.id === id) {
        return { ...goal, ...response.data };
      }
      return goal;
    });

    setGoals(updatedGoals);
  };

  const deleteGoal = (id) => {
    axios.delete(`http://localhost:3001/goals/${id}`);
    const filteredgoals = goals.filter((goal) => goal.id !== id);

    setGoals(filteredgoals);
  };

  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }
  }, [goals]);

  return (
    <main className=" min-vh-100 bg-body-tertiary">
      <div className="container py-3">
        <AddGoal addGoal={addGoal} />
        <GoalList goals={goals} deleteGoal={deleteGoal} editGoal={editGoal} />
      </div>
      {showNotification ? (
        <div
          className="alert alert-success  ms-auto position-absolute top-0 end-0"
          style={{ maxWidth: '400px' }}
          role="alert"
        >
          <div className="d-flex justify-content-between">
            <h4 className="alert-heading">Well done!</h4>
            <i
              className="bi bi-x-circle-fill"
              role="button"
              onClick={() => setShowNotification(false)}
            ></i>
          </div>
          <hr />
          <div className="d-flex gap-1">
            <i className="bi bi-check-circle-fill"></i>
            <p>A new goal has been added to your list</p>
          </div>
        </div>
      ) : null}
    </main>
  );
}

export default App;
