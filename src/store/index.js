import { configureStore } from "@reduxjs/toolkit";
import products from "./products";
import  personalProduct  from "./personalProduct";


export const store = configureStore({
    reducer: {
      products,
      personalProduct,
    },
  });
  