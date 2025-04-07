import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.10.199:5002/api/v1", 
    prepareHeaders: (headers) => {

      const token = localStorage.getItem("accessToken");

  
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "User",
    "Transaction",
    "Products",
    "SellProduct",
    "Blogs",
    "Notification",
    "Question",
    "Orders",
    "Setting",
    "Review",
    "Buy",
  ], 
  endpoints: () => ({}),
});

export default baseApi;
