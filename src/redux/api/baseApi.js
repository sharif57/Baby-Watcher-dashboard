import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.10.199:5002/api/v1", // Replace with your backend URL
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");

      // console.log("Current token:", token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); 
        
      } 

      // console.log("Prepared headers:", headers);
      return headers;
    },
  }),
  tagTypes: ["User","Transaction", 'Products', 'SellProduct','Blogs', "Notification",'Question','Orders','Setting', "Review",'Buy'], // Added all necessary tags
  endpoints: () => ({}),
});

export default baseApi;
