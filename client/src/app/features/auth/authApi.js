import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, we will use that for authenticated requests
      const token = getState().auth.token;
     
      if (token) {
        
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Recipes'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "login",
        method: "POST",
        body: { username, password },
      }),
    }),
    register: builder.mutation({
      query: ({ email, username, password }) => ({
        url: "register",
        method: "POST",
        body: { email, username, password },
      }),
    }),
   
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
