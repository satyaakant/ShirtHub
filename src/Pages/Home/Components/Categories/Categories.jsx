import React from "react";
import { Link } from "react-router-dom";

import { useFilter } from "../../../../Context";
import styles from "./Categories.module.css";

const Categories = () => {
  const { filterDispatch } = useFilter();

  const filterFromHome = (category) => {
    filterDispatch({ type: "CLEAR" });
    filterDispatch({ type: "CATEGORY_FILTER", payload: { type: category } });
  };

  return (
    <div className={styles.categoryList}>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("Action")}
      >
        <img
          src="https://www.crewclothing.co.uk/images/products/large/MMB032_NAVY.jpg"
          alt="Hero Image"
        />
        <span>Mens</span>
      </Link>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("Sports")}
      >
        <img
          src="https://assets.ajio.com/medias/sys_master/root/20230706/g9XQ/64a5c87aa9b42d15c9396290/fery_london_green_floral_print_slim_fit_shirt.jpg"
          alt="Hero Image"
        />
        <span>Womens</span>
      </Link>
    </div>
  );
};

export { Categories };
