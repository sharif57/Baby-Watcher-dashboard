import baseApi from "../api/baseApi";

export const userAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTotalStatistics: builder.query({
      query: () => ({
        url: "/dashboard/get-total-statistics",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/dashboard/all-users",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    userProfile: builder.query({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    updateUserProfile: builder.mutation({
      query: (payload) => ({
        url: "/user/update-profile",
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),

    getRecentTransactions: builder.query({
      query: () => ({
        url: "/dashboard/recent-transactions",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetTotalStatisticsQuery,
  useGetAllUsersQuery,
  useGetRecentTransactionsQuery,
  useUserProfileQuery,
  useUpdateUserProfileMutation,
} = userAPI;
