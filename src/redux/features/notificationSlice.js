import baseApi from "../api/baseApi";

export const notificationAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    notificationGet: builder.query({
      query: () => ({
        url: "/notification/admin",
        method: "GET",
      }),
      providesTags: ["Notification"],
    }),

    // notificationGet: builder.query({
    //   query: ({ limit }) => {
    //     let queryParams = new URLSearchParams();
    //     if (limit) queryParams.append("limit", limit);

    //     return `/notification/admin?${queryParams}`;
    //   },
    //   providesTags: ["Notification"],
    // }),
  }),
});

export const {useNotificationGetQuery  } = notificationAPI;
