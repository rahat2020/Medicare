import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER_URL }),
  tagTypes: ["Post"],

  endpoints: (builder) => ({
    //  LOGIN, REGISTER & USER API
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/v1/login",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Post"]
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/v1/register",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Post"]
    }),
    sendMessage: builder.mutation({
      query: (data) => ({
        url: "/auth/v1/message",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Post"]
    }),
    getAllUsers: builder.query({
      query: () => "/auth/v1/all",
      providesTags: ["Post"]
    }),
    getSingleUser: builder.query({
      query: (id) => `/auth/v1/user/${id}`,
      providesTags: ["Post"]
    }),
    getUserData: builder.query({
      query: (email) => `/auth/v1/user?email=${email}`,
      providesTags: ["Post"]
    }),
    UserTotalPostAndVideosCount: builder.query({
      query: (email) => `/auth/v1/combine?email=${email}`,
      providesTags: ["Post"]
    }),
    userDataByEmail: builder.query({
      query: (email) => `/auth/v1/user-data?email=${email}`,
      providesTags: ["Post"]
    }),
    getMessageByEmail: builder.query({
      query: (email) => `/auth/v1/recieved?email=${email}`,
      providesTags: ["Post"]
    })
  })
});

export const {
  // LOGIN, REGISTER AND USERS
  useLoginMutation,
  useRegisterMutation,
  useGetUserDataQuery,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUserDataByEmailQuery,
  useUserTotalPostAndVideosCountQuery,
  useSendMessageMutation,
  useGetMessageByEmailQuery
} = authApi;
