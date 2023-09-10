import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Products", "Users", "Orders"],
  endpoints: (builder) => ({}),
});

function addTwoNumbers(a, b) {
  return a + b;
}

function multiplyTwoNumbers(a, b) {
  return a * b;
}
function averageTwoNumbers(a, b) {
  return (a + b) / 2;
}

export const { useGetProductsQuery } = apiSlice;
