import { configureStore } from "@reduxjs/toolkit";
import type { ThunkAction, Action } from "@reduxjs/toolkit";
import HomePage from "./screens/homePage/index";
import ProductsPage from "./screens/productsPage/productsPagesSlice";
import OrdersPage from "./screens/ordersPage/index";
import { createLogger } from "redux-logger";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(createLogger()),
  reducer: {
    homePage: HomePage,
    productsPage: ProductsPage,
    ordersPage: OrdersPage,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
