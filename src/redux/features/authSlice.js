import baseApi from "../api/baseApi";

export const authAPI = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: data,
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        // },
      }),
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),

    // resetPassword: builder.mutation({
    //   query: (data) => ({
    //     url: "/auth/reset-password",
    //     method: "POST",
    //     body: data,
    //     headers: {
    //       Authorization: `${localStorage.getItem("accessToken")}`,
    //     },
    //   }),
    // }),

    resetPassword: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("accessToken");
        console.log(token , "reset password")

        if (!token) {
          throw new Error("No token found. Please verify your email again.");
        }

        return {
          url: "/auth/reset-password",
          method: "POST",
          body: data, 
          headers: {
            Authorization: token,
          },
        };
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useVerifyEmailMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
} = authAPI;
