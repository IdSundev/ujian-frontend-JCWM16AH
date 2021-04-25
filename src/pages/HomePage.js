import React, { useEffect } from "react";
import "./HomePage.css";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../store/actions/productAction";
import FilteredMenu from "../components/FilteredMenu";
import ListProducts from "../components/ListProducts";

export default function HomePage() {
  const dispatch = useDispatch();
  const {
    products,
    isLoadingProduct,
    isFiltered,
    filteredProduct,
    filterBy,
  } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="home-page">
      <FilteredMenu />
      <ListProducts
        products={!isFiltered ? products : filteredProduct}
        isLoadingProduct={isLoadingProduct}
        filterBy = {filterBy}
      />
    </div>
  );
}
