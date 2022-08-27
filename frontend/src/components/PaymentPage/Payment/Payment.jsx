import React from "react";
import styles from "./Payment.module.css";
const Payment = () => {
  return (
    <div className={styles.mainContainer}>
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
      <div>
        <div></div>
        <div className={styles.optionsAndCard}>
          <div className={styles.paymentOptions}>
            <p>Credit / Debit Card</p>
            <hr />
            <p>Netbanking</p>
            <hr />
            <p>UPI</p>
<hr />
<p>Wallet</p>
<hr />
<p>Pay Later</p>
<hr />
<p>Cash/Card on Delivery</p>
<hr />
          </div>
          <div className={styles.cardDiv}>
            <div>
                <h4>Add Credit/ Debit Card</h4>
                <div>
                <p>Card Number</p>
                <input type="text" />
                </div>
               <div>
                <div>
                <p>Valid Thru</p>
                <input type="text" />
                </div>

                <div>
                    <p>CVV</p>
                    <input type="text" />
                </div>
               </div>
               <button>Place Order & Pay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
