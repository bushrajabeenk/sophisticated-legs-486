import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Email from "./Email";
import style from "./box.module.css";
import { useState } from "react";
import Rightbox from "./Rightbox";
import Otp from "./Otp";
import Signup from "./Signup";
const Box = () => {
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [text,settext]=useState('')
  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          style={{
            maxWidth: "715px",
            height: "510px",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <ModalCloseButton
            marginTop="30px"
            marginRight="50px"
            borderRadius="50%"
            backgroundColor="grey"
          />
          <div className={style.flexbox}>
            <div className={style.leftbox}>
              {show&&show1 ? <Email setShow={setShow} text={text} settext={settext}/> :null}
              {!show&&show1?  <Otp setShow={setShow} text={text} isOpen={onClose} setShow1={setShow1}/>:null}
      {!show&&!show1?<Signup  close={onClose}></Signup>:null}
              </div>
            <div className={style.rightbox}>
             <Rightbox  ></Rightbox>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Box;
