import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";
import { useEffect } from "react";

import { createSelector, type Dispatch } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import type { Product } from "../../../lib/types/product";
import { useDispatch, useSelector } from "react-redux";
import { retrievePopularDishes } from "./selector";

// ─── REDUX SLICE & SELECTOR ──────────────────────────
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes }),
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Selector: Store => Data

  useEffect(() => {
    // Backend server date request => Data
    // const result = [];
    // Slice: Data => Store
    // @ts-ignore
    // setPopularDishes(result);
  }, []);
  // console.log("popularDishes:", popularDishes);

  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
