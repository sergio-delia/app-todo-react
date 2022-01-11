import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TODO_URL } from '../config'

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({ baseUrl: TODO_URL}),


  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (list_id = '') => "?list_id="+list_id, //qua andrebbe messo l'indirizzo da raggiungere per esempio /lists ma è già inserito nel base url
      providesTags: ['TODOS'],
    }),
    deleteTodo: builder.mutation({
        query: (id) => ({
            url: "/"+id,
            method: 'DELETE'
        }),
        invalidatesTags: ['TODOS'] //inserendo questi tags (provideTags) faccio in modo di rieseguire la funzione (getLists) in automatico dopo aver fatto una delete
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
          url: "",
          method: 'POST',
          body: todo
      }),
      invalidatesTags: ['TODOS'] //inserendo questi tags (provideTags) faccio in modo di rieseguire la funzione (getLists) in automatico dopo aver fatto una delete
  }),
  updateTodo: builder.mutation({
    query: ({id, ...todo}) => ({
        url: "/"+id,
        method: 'PATCH',
        body: todo
    }),
    invalidatesTags: ['TODOS'] //inserendo questi tags (provideTags) faccio in modo di rieseguire la funzione (getLists) in automatico dopo aver fatto una delete
})
  }),


})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

//creando un endpoints si crea in automatico il metodo use<nome endpoint>Query
export const { useGetTodosQuery, useDeleteTodoMutation, useAddTodoMutation, useUpdateTodoMutation } = todosApi