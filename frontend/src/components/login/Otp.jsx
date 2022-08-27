import React, { useState } from "react";
import style from "./otp.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";
import { useSelector } from "react-redux";



const Otp = ({email , setShow,setShow1,text,isOpen}) => {
  const [pin,setPin]=useState('')
  email=text
  const data=useSelector(state=>state.auth.token)
  function ChangeHandler(input){
    setPin(input)
  }
  function OtpHandler(){
    if(pin==data.otp&&!data.email){
setShow1(false)
setShow(false)
    }
    else if(data.email){
      localStorage.setItem("id",data.id)
// close the box
isOpen()
    }
    
  }
  



  return (
    <div>
      <div className={style.headdiv}>
        <MdArrowBackIosNew color="#444" className={style.backicon} onClick={()=>{setShow(true)}} ></MdArrowBackIosNew>
        <h3 className={style.heading}>
          <p>Verify Email Address</p>
        </h3>
      </div>
      <div className={style.middle}>
        <p className={style.psmall}>Please check the OTP sent to your email address</p>
        <p className={style.email}>
        {email}
        <button className={style.changebtn}>Change</button>
        </p>
      </div>
      <div className={style.input}>
        <p className={style.psmall} style={{fontSize:"12px"}}>Enter OTP</p>
        <div className={style.pindiv}>
    
  <PinInput display="flex" placeholder="" outline={false}  manageFocus={true} onChange={(e)=>ChangeHandler(e)}>
    <PinInputField className={style.pinbox} />
    <PinInputField className={style.pinbox} />
    <PinInputField className={style.pinbox} />
    <PinInputField className={style.pinbox} />
    <PinInputField className={style.pinbox} />
    <PinInputField className={style.pinbox} />
  </PinInput>
  <center>

<button className={style.changebtn1}> Resend OTP</button>
  </center>
        </div>
        <button className={style.varbtn} onClick={OtpHandler}>Veify & Continue</button>
      </div>
    </div>
  );
};

export default Otp;

