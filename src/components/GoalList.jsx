import GoalDetails from "./GoalDetails";
import { useFetchGoalsQuery } from "../app/features/goalsAPI";

export default function GoalList() {
  const { data: goals, isLoading, error, isError } = useFetchGoalsQuery();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>{error.message}</h1>;
  const goalList = goals.map((goal, idx) => {
    return (
      <GoalDetails
        className={
          idx === 0 || (idx === goals.length - 1 && idx % 2 !== 0)
            ? "col-12"
            : "col-12 col-md-6"
        }
        key={goal.id}
        goal={goal}
      />
    );
  });

  return (
    <section
      className="container border rounded p-4 bg-white shadow-lg"
      style={{ maxWidth: "800px", minHeight: "600px" }}
    >
      <div className="row g-4">{goalList}</div>
    </section>
  );
}
