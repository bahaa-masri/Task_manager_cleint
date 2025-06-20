import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// const API_URI = "http://localhost:8800/api"
//const API_URI = import.meta.env.VITE_APP_BASE_URL

//const API_URI = "http://localhost:5000"
const API_URI = "https://task-manager-6hv0.onrender.com"
// const baseQuery = fetchBaseQuery({ baseUrl: API_URI + "/api" })
const baseQuery = fetchBaseQuery({
    baseUrl: API_URI + "/api",
    prepareHeaders: (headers) => {
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
          }
          
          const token = getCookie('token');
          console.log(token);
          
      //const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include", // إذا كنت تستعمل كمان cookie مع التوكن
  });
export const apiSlice = createApi({
    baseQuery,
    tagTypes: [],
    endpoints: (builder) => ({}),
})
