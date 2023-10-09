import { useState } from "react";
import AddGoal from "./components/AddGoal";
import GoalList from "./components/GoalList";
import NotificationModal from "./components/NotificationModal";

function App() {
  const [query, setQuery] = useState("");
  const filterGoals = (goals) => {
    return goals.filter((goal) =>
      goal.title.toLowerCase().includes(query.toLowerCase())
    );
  };
  return (
    <>
      <main className=" min-vh-100 bg-body-tertiary">
        <div className="container py-5">
          <input
            style={{ maxWidth: "800px" }}
            className="form-control mx-auto shadow py-2 fs-5"
            type="search"
            placeholder="Search your goals"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <AddGoal />
          <GoalList filterGoals={filterGoals} />
        </div>
      </main>
      <NotificationModal />
    </>
  );
}

export default App;
