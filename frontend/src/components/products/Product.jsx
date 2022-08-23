import React from "react";
import styles from "../products/Product.module.css";
import products from "./productData";
import ProductCard from "../products/ProductCard";
const Product = () => {

    

    
   
  return (
    <div className={styles.mainContainer}>
      <div className={styles.filterDiv}>
        <div>left part left</div>
      </div>
      <div className={styles.productDiv}>
        <p>Fruits and Vegetables(631)</p>
        <div className={styles.mappingDiv}>
          {products.map((e, index) => {
            return (
                <>
                <ProductCard data={e} />
                </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
