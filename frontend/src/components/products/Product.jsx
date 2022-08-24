import React from "react";
import styles from "../products/Product.module.css";
import products from "./productData";
import ProductCard from "../products/ProductCard";
const Product = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.filterDiv}>
        <div>
          <p>Category</p>
          <div className={styles.line}></div>
          <p className={styles.checkboxText}>Fruits & Vegetables</p> 
        </div>
        <div>
          <p>Brand</p>
          <div className={styles.line}></div>
          <input type="text" />
          <div className={styles.checkboxText}>
            <input type="checkbox" />
            Fresho
          </div>
        </div>
        <div>
          <p>Price</p>
          <div className={styles.line}></div>
          <div className={styles.checkboxText}>
            <input type="checkbox" />Less than Rs 20
          </div>
          <div className={styles.checkboxText}>
            <input type="checkbox" />Rs 21 to Rs 50
          </div>
          <div className={styles.checkboxText}>
            <input type="checkbox" />Rs 51 to Rs 100
          </div>
          <div className={styles.checkboxText}>
            <input type="checkbox" />Rs 101 to Rs 200
          </div>
        </div>
        <div>
          <p>Discount</p>
          <div className={styles.line}></div>
          <div className={styles.checkboxText}>
            <input type="checkbox" /> 5% - 10%
          </div>
          <div className={styles.checkboxText}>
            <input type="checkbox" />15% - 20%
            
          </div>
        </div>
        <div>
          <p>Pack Size</p>
          <div className={styles.line}></div>
          <input type="text" />
          <div className={styles.checkboxText}>
            <input type="checkbox" /> 80-100 g
          </div>
          <div className={styles.checkboxText}>
            <input type="checkbox" /> 1 pc
          </div>
        </div>
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
