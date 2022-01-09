import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LIST_URL } from '../config'

// Define a service using a base URL and expected endpoints
export const listsApi = createApi({
  reducerPath: 'lists',
  baseQuery: fetchBaseQuery({ baseUrl: LIST_URL}),


  endpoints: (builder) => ({
    getLists: builder.query({
      query: () => "", //qua andrebbe messo l'indirizzo da raggiungere per esempio /lists ma è già inserito nel base url
      providesTags: ['LISTS'],
    }),
    deleteLists: builder.mutation({
        query: (id) => ({
            url: "/"+id,
            method: 'DELETE'
        }),
        invalidatesTags: ['LISTS'] //inserendo questi tags (provideTags) faccio in modo di rieseguire la funzione (getLists) in automatico dopo aver fatto una delete
    }),
    addLists: builder.mutation({
      query: (list) => ({
          url: "",
          method: 'POST',
          body: list
      }),
      invalidatesTags: ['LISTS'] //inserendo questi tags (provideTags) faccio in modo di rieseguire la funzione (getLists) in automatico dopo aver fatto una delete
  }),
  updateList: builder.mutation({
    query: ({id, ...list}) => ({
        url: "/"+id,
        method: 'PATCH',
        body: list
    }),
    invalidatesTags: ['LISTS'] //inserendo questi tags (provideTags) faccio in modo di rieseguire la funzione (getLists) in automatico dopo aver fatto una delete
})
  }),


})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

//creando un endpoints si crea in automatico il metodo use<nome endpoint>Query
export const { useGetListsQuery, useDeleteListsMutation, useAddListsMutation, useUpdateListMutation } = listsApi