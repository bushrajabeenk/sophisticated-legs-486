import styles from "./Address.module.css";

import React from "react";
import { useNavigate } from "react-router";

const Address = () => {
  const navigate = useNavigate();
  const handlePayment = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <>
      <div className={styles.mainDiv}>
        <div>
          <div className={styles.addressDiv}>
            <h3>Delivery Address</h3>
            <form className={styles.detailsDiv} onSubmit={handlePayment}>
              <div className={styles.personalDetailsDiv}>
                <p>Personnal Details</p>
                <div className={styles.personalContainer}>
                  <div>
                    <p className={styles.smallText}>Enter First Name</p>
                    <input type="text" className={styles.firstName} required  />
                  </div>

                  <div>
                    <p className={styles.smallText}> Enter Last Name</p>
                    <input type="text" className={styles.lastName} required />
                  </div>

                  <div>
                    <p className={styles.smallText}>Enter contact number</p>
                    <input type="text" className={styles.number} required />
                  </div>
                </div>
              </div>
              <div className={styles.addressDetailsDiv}>
                <p>Address Details</p>
                <div className={styles.addressContainer}>
                  <div>
                    <p className={styles.smallText}>House No</p>
                    <input type="text" className={styles.houseNumber} required/>
                  </div>
                  <div>
                    <p className={styles.smallText}>Enter apartment name</p>
                    <input type="text" className={styles.appName} required/>
                  </div>
                </div>
              </div>

              <div className={styles.streetDiv}>
                <div>
                  <p className={styles.smallText}>Enter street details</p>
                  <input type="text" className={styles.streetName} required/>
                </div>
                <div>
                  <p className={styles.smallText}>
                    Enter landmark for easy reach out
                  </p>
                  <input type="text" className={styles.landmark} required/>
                </div>
              </div>

              <div className={styles.cityDiv}>
                <div>
                  <p className={styles.smallText}>Enter city name</p>
                  <input type="text" className={styles.cityName} required/>
                </div>

                <div>
                  <p className={styles.smallText}>Area Details</p>
                  <input type="text" className={styles.areaName} required />
                </div>

                <div>
                  <p className={styles.smallText}>Enter Pincode</p>
                  <input type="text" className={styles.pinCode} required/>
                </div>
              </div>

              <div>
                <p className={styles.smallText}>
                  Choose nick name for this address
                </p>
                <button className={styles.homeOfficeOther} type="button">HOME</button>
                <button className={styles.homeOfficeOther}  type="button">OFFICE</button>
                <button className={styles.homeOfficeOther}  type="button">OTHER</button>
                <div className={styles.smallText}>
                  <input type="checkbox" />
                  Set this as my default delivery address
                </div>
              </div>
              <div className={styles.addAddressButtons}>
                <button className={styles.addButton} type="submit" >
                  ADD ADDRESS
                </button>
                <button className={styles.cancel} type="reset">CANCEL</button>
              </div>
            </form>
          </div>
          <div className={styles.giftOrder}>
            <h4>Is this a gift Order?</h4>
            <button>ADD MESSAGE</button>
          </div>
          <div className={styles.deliveryOptions}>
            <h4>Delivery Options</h4>
            <button>Change</button>
          </div>
          <div className={styles.paymentOptions}>
            <h4>Payment Options</h4>
          </div>
        </div>
        <div className={styles.voucherPriceDiv}>
          <h3>Apply Voucher</h3>
          <div className={styles.voucher}>
            <div className={styles.inputButton}>
              <input type="text" className={styles.voucherInput} />
              <button className={styles.button}>APPLY</button>
            </div>
            <div className={styles.vouchersAvailable}>
              <div className={styles.circle1}></div>
              <p style={{ marginLeft: "20px" }}>14 Vouchers available</p>
              <div className={styles.circle2}></div>
            </div>
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
                <div className={styles.totlaSaving}>
                  <h5 className={styles.saving}>Total Savings Rs58.98</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
