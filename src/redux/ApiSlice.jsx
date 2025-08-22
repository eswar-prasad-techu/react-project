import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.in/api/" }),
  tagTypes:["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
      transformResponse:(data)=>data.products,
      providerTags:["products"]
    }),
    singleProduct: builder.query({
      query: ({ id, param }) => ({
        url: `products/${id}`,
        method: "GET",
        // params:param
      }),
    }),
    postProduct: builder.mutation({
      query: (body) => ({
        url: `products`,
        method: "POST",
        body,
      }),
      invalidatesTags:["products"]
    }),
     updateProduct: builder.mutation({
      query: ({id,body}) => ({
        url: `products/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags:["products"]
    }),
    deleteProduct: builder.mutation({
      query: ({id}) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:["products"]
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = ApiSlice;
