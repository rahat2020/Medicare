import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.SERVER_URL }),
  tagTypes: ["Post"],

  endpoints: (builder) => ({
    ////////// POSTS API ///////////
    getAllPost: builder.query({
      query: () => "/posts/v1/all-posts",
      providesTags: ["Post"]
    }),
    categoryByPosts: builder.query({
      query: (data) => `/posts/v1/category=${data}`,
      providesTags: ["Post"]
    }),
    getSinglePost: builder.query({
      query: (id) => `/posts/v1/post/${id}`,
      providesTags: ["Post"]
    }),
    createComments: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        // console.log('apiSlice-comments-data', body)
        // console.log('apiSlice-Update-ID', id)
        return {
          url: `/posts/v1/comments/${id}`,
          method: "POST",
          body: data
        };
      },
      invalidatesTags: ["Post"]
    }),
    createLikes: builder.mutation({
      query: (data) => {
        const { id, ...body } = data;
        // console.log('apiSlice-comments-data', body)
        // console.log('apiSlice-Update-ID', id)
        return {
          url: `/posts/v1/likes/${id}`,
          method: "POST",
          body: data
        };
      },
      invalidatesTags: ["Post"]
    }),
    increaseViews: builder.mutation({
      query: (data) => {
        const { id } = data;
        return {
          url: `/posts/v1/post/${id}/views`,
          method: "PATCH",
          body: data
        };
      },
      invalidatesTags: ["Post"]
    }),
    increaseVideoViews: builder.mutation({
      query: (data) => {
        const { id } = data;
        return {
          url: `/videos/v1/videos/${id}/views`,
          method: "PATCH",
          body: data
        };
      },
      invalidatesTags: ["Post"]
    }),
    /////////// CATEGORY API ///////////
    getCategory: builder.query({
      query: () => "/category/v1/get",
      providesTags: ["Post"]
    }),
    getSingleCategory: builder.query({
      query: (id) => `/category/v1/get/${id}`,
      providesTags: ["Post"]
    }),
    getCategoryPosts: builder.query({
      query: (params) => `/category/v1/filter?category=${params}`,
      providesTags: ["Post"]
    }),
    getCategoryvideos: builder.query({
      query: (params) => `/category/v1/filter-videos?category=${params}`,
      providesTags: ["Post"]
    })
  })
});

export const {
  // POST
  useGetAllPostQuery,
  useCategoryByPostsQuery,
  useGetSinglePostQuery,
  useCreateCommentsMutation,
  useCreateLikesMutation,
  useIncreaseViewsMutation,

  // CATEGORY
  useGetCategoryQuery,
  useGetSingleCategoryQuery,
  useGetCategoryPostsQuery,
  useGetCategoryvideosQuery,

  // VIDEO
  useGetAllVideosQuery,
  useGetSingleVideosQuery,
  useIncreaseVideoViewsMutation
} = api;
