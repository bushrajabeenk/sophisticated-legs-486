import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getdata } from "../../redux/Signup/auth.actions";

import styles from "../products/Product.module.css";


const ProductCard = ({ data }) => {
  // console.log(data);
  const navigate=useNavigate()
  const dispatch =useDispatch()

function clickHandler(e){
  // dispatch(getdata(data))
  
  navigate(`/productDetails/${e._id}`)
}

  return (
    <div className={styles.productMainDiv} >
      <div className={styles.productSubDiv} onClick={()=>clickHandler(data)}>
        <div className={styles.productDiscount}><p>Get 15
          {/* changehere */}
          % off</p><img src="https://www.bbassets.com/static/v2578/custPage/build/content/img/product-deck-sprite.png" width="0px" height="0px" alt="" /> </div>
        <div className={styles.productImage} >
          <img src={data.Image_url} width="100%" alt="image"  />
        </div>
        <img
          src="	"
          alt=""
        />
        <p className={styles.fresho}>Fresho</p>{" "}
        <p className={styles.productName}>{data.Title}</p>
        {/* <select name="" id="" className={styles.kgPrice}>
          <option value="">Random Data</option>{" "}
        </select>{" "} */}
        <div className={styles.prctymbtn}>
          <p className={styles.priceSection}>
            {" "}
            <span className={styles.mrpDiv}>
              MRP:{" "}
              <span style={{ textDecoration: "line-through" }}>
                {/* Rs. {data.mrp[0]}{" "} */}
              </span>
            </span>
            <span className={styles.price}> Rs {data.Price}</span>
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
              <input type="text" className={styles.Inputnumber} defaultValue="1" />
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
