import baseApi from "../api/baseApi";

export const transactionsAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    recentTransactions: builder.query({
      query: () => ({
        url: "/dashboard/recent-transactions",
        method: "GET",
      }),
      providesTags: ["Transaction"],
    }),

  }),
});

export const {useRecentTransactionsQuery} = transactionsAPI;
