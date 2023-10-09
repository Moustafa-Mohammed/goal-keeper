import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goalsApi = createApi({
  reducerPath: "goals",
  tagTypes: ["Goals"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),

  endpoints: (builder) => ({
    fetchGoals: builder.query({
      query: () => "/goals",
      providesTags: ["Goals"],
    }),

    deleteGoal: builder.mutation({
      query: (id) => ({
        url: `/goals/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: (result, error) => (error ? [] : ["Goals"]),
    }),

    addGoal: builder.mutation({
      query: (goal) => ({
        url: "/goals",
        method: "POST",
        body: goal,
      }),
      invalidatesTags: (result, error) => (error ? [] : ["Goals"]),
    }),

    updateGoal: builder.mutation({
      query: (goal) => ({
        url: `/goals/${goal.id}`,
        method: "PUT",
        body: goal,
      }),
      invalidatesTags: (result, error) => (error ? [] : ["Goals"]),
    }),
  }),
});

export const {
  useFetchGoalsQuery,
  useDeleteGoalMutation,
  useAddGoalMutation,
  useUpdateGoalMutation,
} = goalsApi;
