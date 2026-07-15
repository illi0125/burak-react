import { configureStore } from "@reduxjs/toolkit";
import type { ThunkAction, Action } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import ProductsPage from "./screens/productsPage/productsPagesSlice";
import OrdersPage from "./screens/ordersPage/ordersSlice";
import HomePageReducer from "./screens/homePage/slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    // @ts-ignore
    getDefaultMiddleware().concat(createLogger()),
  reducer: {
    homePage: HomePageReducer,
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
