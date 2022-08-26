import styles from "./Address.module.css";

import React from "react";

const Address = () => {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.addressDiv}>
        <h3>Delivery Address</h3>
        <div className={styles.detailsDiv}>
          <div className={styles.personalDetailsDiv}>
            <p>Personnal Details</p>
            <div className={styles.personalContainer}>
              <div>
                <p>Enter First Name</p>
                <input type="text" className={styles.firstName} />
              </div>

              <div>
                <p> Enter Last Name</p>
                <input type="text" className={styles.lastName} />
              </div>

              <div>
                <p>Enter contact number</p>
                <input type="text" className={styles.number} />
              </div>
            </div>
          </div>
          <div className={styles.addressDetailsDiv}>
            <p>Address Details</p>
            <div className={styles.addressContainer}>
              <div>
                <p>House No</p>
                <input type="text" className={styles.houseNumber}/>
              </div>
              <div>
                <p>Enter apartment name</p>
                <input type="text" className={styles.appName} />
              </div>
            </div>
          </div>

          <div className={styles.streetDiv}>
            <div>
              <p>Enter street details</p>
              <input type="text" className={styles.streetName}/>
            </div>
            <div>
              <p>Enter landmark for easy reach out</p>
              <input type="text" className={styles.landmark}/>
            </div>
          </div>

          <div className={styles.cityDiv}>
            <div>
              <p>Enter city name</p>
              <input type="text" className={styles.cityName}/>
            </div>

            <div>
              <p>Area Details</p>
              <input type="text" className={styles.areaName} />
            </div>

            <div>
              <p>Enter Pincode</p>
              <input type="text" className={styles.pinCode} />
            </div>
          </div>
       
        <div>
          <p>Choose nick name for this address</p>
          <button>HOME</button>
          <button>OFFICE</button>
          <button>OTHER</button>
          <div>
            <input type="checkbox" />
            Set this as my default delivery address
          </div>
        </div>
        <div className={styles.buttons}>
          <button>ADD ADDRESS</button>
          <button>CANCEL</button>
        </div>
      </div>
      </div>
      <div className={styles.voucherPriceDiv}>
        <h3>Apply Voucher</h3>
        <div className={styles.voucher}>
          <div>
            <input type="text" />
            <button>APPLY</button>
          </div>
          <div className={styles.vouchersAvailable}>
            <p>14 Vouchers available</p>
          </div>
          <div className={styles.circle}></div>
        </div>
        <div>
          <h3>Order Summary</h3>
          <div className={styles.order}>
            <div className={styles.valueCharge}>
              <p>Basket Value Rs180</p>
              <p>Delivery Charge FREE</p>
            </div>
            <div className={styles.amountPayable}>
              <h4>Total Amount Rs180</h4>
              <div>
                <p>Total Savings Rs58.98</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
