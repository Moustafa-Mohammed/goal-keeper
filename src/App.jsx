import AddGoal from "./components/AddGoal";
import GoalList from "./components/GoalList";
import NotificationModal from "./components/NotificationModal";

function App() {
  return (
    <>
      <main className=" min-vh-100 bg-body-tertiary">
        <div className="container py-3">
          <AddGoal />
          <GoalList />
        </div>
      </main>
      <NotificationModal />
    </>
  );
}

export default App;
