import React from 'react'
import style from './box.module.css'
const Email = ({setShow}) => {
    function MailHandler(){
        setShow(false)

    }
  return (
    <div> 
        <h3 className={style.heading}>LOGIN/SIGN UP</h3>

    <input
      className={style.input}
      type="text"
      placeholder="Enter Email Address"
    />
    <button className={style.Lbtn}>Login using Mobile Number</button>
    <button className={style.Cbtn} onClick={MailHandler}>Continue </button>
    <p className={style.psmall}>
      Enter Email Address By continuing, I accept TCP-bigbasket’s{" "}
      <a> Terms and Conditions </a> and Privacy Policy.
    </p>
    </div>
  )
}

export default Email