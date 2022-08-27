import React from "react";
import styles from "../products/Product.module.css";
import products from "./productData";
import ProductCard from "../products/ProductCard";
import Description from "./Description";
const Product = () => {
  const [data, setData] = React.useState(products);
  const [checked, setChecked] = React.useState("");

  function SortD(val) {
    console.log(val);
    let buy = data.sort((a, b) => {
      if (val == "lth") {
        return a.mrp[1] - b.mrp[1];
      } else if (val == "htl") {
        return b.mrp[1] - a.mrp[1];
      } else if (val == "alphabetical") {
        return a.productName.localeCompare(b.productName);
      }
    });

    setData([...data]);
  }

  const handleCheck = (e) => {
    let num = e.target.value;

    let filterData = data.filter((data) => {
      if(num<=20){
      return data.offer < Number(num);
      }else if(num>20 && num<=50){
        return data.mrp[1] > 20 && data.mrp[1] < Number(num);
      }else if(num>50 && num<=100){
        return data.mrp[1] > 50 && data.mrp[1] < Number(num);
      }else if(num>100 && num<=200){
        return data.mrp[1] > 100 && data.mrp[1] < Number(num);
      }else if(num>200 && num<=500){      
        return data.mrp[1] > 200 && data.mrp[1] < Number(num);
      }else if(num>500 && num<=1000){
        return data.mrp[1] > 500 && data.mrp[1] < Number(num);
      }
    });

    setData([...filterData]);
  };
  

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.filterDiv}>
          <div>
            <p className={styles.inline}>Category</p>
            <div className={styles.line}></div>
            <div>
              <p className={styles.checkboxText}>Fruits & Vegetables</p>
              <p></p>
            </div>
          </div>
          <div>
            <p>Brand</p>
            <div className={styles.line}></div>
            {/* <input type="text" /> */}
            <div className={styles.checkboxText}>
              <input type="checkbox" className={styles.chekbox} />
              Fresho
            </div>
            <div className={styles.checkboxText}>
              <input type="checkbox" className={styles.chekbox} />
              bb Combo
            </div>
            <div className={styles.checkboxText}>
              <input type="checkbox" className={styles.chekbox} />
              Organic
            </div>
            <div className={styles.checkboxText}>
              <input type="checkbox" className={styles.chekbox} />
              Gopalan Organic
            </div>
          </div>
          <div>
            <p>Price</p>
            <div className={styles.line}></div>
            <div className={styles.checkboxText}>
              <input
                type="checkbox"
                className={styles.chekbox}
                value="20"
                onChange={(e) => handleCheck(e)}
              />
              Less than Rs 20
            </div>
            <div className={styles.checkboxText}>
              <input
                type="checkbox"
                className={styles.chekbox}
                value="50"
                onClick={(e) => handleCheck(e)}
              />
              Rs 21 to Rs 50
            </div>
            <div className={styles.checkboxText}>
              <input
                type="checkbox"
                className={styles.chekbox}
                value="100"
                onClick={(e) => handleCheck(e)}
              />
              Rs 51 to Rs 100
            </div>
            <div className={styles.checkboxText}>
              <input
                type="checkbox"
                className={styles.chekbox}
                value="200"
                onClick={(e) => handleCheck(e)}
              />
              Rs 101 to Rs 200
            </div>

            <div className={styles.checkboxText}>
              <input
                type="checkbox"
                className={styles.chekbox}
                value="300"
                onClick={(e) => handleCheck(e)}
              />
              Rs 201 to Rs 300
            </div>

            <div className={styles.checkboxText}>
              <input
                type="checkbox"
                className={styles.chekbox}
                value="400"
                onClick={(e) => handleCheck(e)}
              />
              Rs 301 to Rs 400
            </div>

            <div className={styles.checkboxText}>
              <input
                type="checkbox"
                className={styles.chekbox}
                value="500"
                onClick={(e) => handleCheck(e)}
              />
              Rs 401 to Rs 500
            </div>
          </div>
          <div>
            <p>Discount</p>
            <div className={styles.line}></div>
            <div className={styles.checkboxText}>
              <input
                type="checkbox"
                className={styles.chekbox}
                value="10%"
                onClick={(e) => handleCheck(e)}
              />{" "}
              5% - 10%
            </div>
            <div className={styles.checkboxText}>
              <input
                type="checkbox"
                className={styles.chekbox}
                value="15%"
                onClick={(e) => handleCheck(e)}
              />
              10% - 15%
            </div>
            <div className={styles.checkboxText}>
              <input
                type="checkbox"
                className={styles.chekbox}
                value="25%"
                onClick={(e) => handleCheck(e)}
              />
              15% - 25%
            </div>
            <div className={styles.checkboxText}>
              <input
                type="checkbox"
                className={styles.chekbox}
                value="30%"
                onClick={(e) => handleCheck(e)}
              />
              More than 25%
            </div>
          </div>
          <div>
            <p>Pack Size</p>
            <div className={styles.line}></div>
            {/* <input type="text" /> */}
            <div className={styles.checkboxText}>
              <input type="checkbox" className={styles.chekbox} /> 80-100 g
            </div>
            <div className={styles.checkboxText}>
              <input type="checkbox" className={styles.chekbox} /> 1 pc
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.productDiv}>
          <div className={styles.typeAndSort}>
            <p>Fruits and Vegetables(631)</p>
            <div className={styles.select}>
              <select
                name=""
                id=""
                onChange={(e) => {
                  SortD(e.target.value);
                }}
              >
                <option value="popularity">Popularity</option>
                <option value="lth">Price low-to-high</option>
                <option value="htl">Price high-to-low</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
            </div>
          </div>
          <div className={styles.topTruck}>
            <img
              width="20px"
              src="https://www.bbassets.com/static/v2580/custPage/build/content/img/standard-del.svg"
              alt=""
            />
            <h6>ALL PRODUCTS</h6>
          </div>
          <div className={styles.hrLine}></div>
          <div className={styles.mappingDiv}>
            {data.map((e, index) => {
              return (
                <>
                  <ProductCard key={index} data={e} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Description />
    </>
  );
};

export default Product;