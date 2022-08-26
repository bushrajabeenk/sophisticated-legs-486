import React from "react";
import style from "./signup.module.css";

const Signup = () => {
  function submitHandler(){
    
  }
  return (
    <div>
      <h3 className={style.heading}>
        <p>Almost There</p>
      </h3>
      <p className={style.psmall}>Help us to know you better!</p>
      <div className={style.form}>
        <div className={style.Namediv}>
          <input type="text" name="" id="" placeholder="First Name" />
          <input type="text" name="" id="" placeholder="Last Name" />
        </div>
        <div className={style.Emaildiv}>
        <input type="text" name="" id="" placeholder="Email" className={style.einput}/>

        </div>
        <button className={style.varbtn} onClick={submitHandler}>
        </button>
      </div>
    </div>
  );
};

export default Signup;
