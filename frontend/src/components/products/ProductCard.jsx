import React from "react";
import products from "./productData";
import styles from "../products/Product.module.css";

const ProductCard = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.productMainDiv}>
      <div className={styles.productSubDiv}>
        <div className={styles.productDiscount}></div>
        <div className={styles.productImage}>
          <img src={data.imageUrl} width="100%" alt="image" />
        </div>
        <img
          src="	https://www.bbassets.com/static/v2578/custPage/build/content/img/vegicon.svg"
          alt=""
        />
        <p className={styles.fresho}>Fresho</p>{" "}
        <p className={styles.productName}>{data.productName}</p>
        <select name="" id="" className={styles.kgPrice}>
          <option value="">Random Data</option>{" "}
        </select>{" "}
        <div className={styles.prctymbtn}>
          <p className={styles.priceSection}>
            {" "}
            <span className={styles.mrp}>
              MRP:{" "}
              <span style={{ textDecoration: "line-through" }}>
                Rs. {data.mrp[0]}{" "}
              </span>
            </span>
            <span> Rs.{data.mrp[1]}</span>
          </p>
          <div className={styles.stdDiv}>
            <img
              className={styles.truckimg}
              src="https://www.bbassets.com/static/v2578/custPage/build/content/img/standard-del-gray.svg"
              width="20px"
              alt=""
            />
            <p className={styles.dlyTime}>
              standard Delivery: Today 9:00AM - 11:00AM
            </p>
          </div>
          <div className={styles.qtyAddDiv}>
            <div className={styles.qtyDiv}>
              <div className={styles.qty}>
                <p>Qty</p>
              </div>
              <input type="number" className={styles.Inputnumber} />
            </div>
            <div className={styles.addButtonDiv}>
              <p>ADD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
