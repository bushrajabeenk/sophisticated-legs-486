const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const nodeMailer = require("nodemailer");
// const dotenv = require("dotenv").config();
const cors = require("cors");
const { Schema, model } = require("mongoose");
const connection = require("./db");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
// -------------------------------------for dotenv --------------------------------

let PORT = 8080;

// ----------------------------------------user--Schemas--------------------------------------

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  mobile: String,
  cart: [
    {
      productId: Schema.Types.ObjectId,
      quantity: Number,
    },
  ],
  email: String,
});
const User = model("User", UserSchema);
// ----------------------------------product Schema--------------------------------
const ProductSchema = new Schema({
  Title: String,
  Brand: String,
  Discription: String,
  Price: Number,
  Image_url: String,
  Category: String,
});
const Product = mongoose.model("Product", ProductSchema);
//----------------------------------cart Schema-----------------------------------
// const CartSchema =new Schema({
//     userId: String,
//     cart:[{productId: Schema.Types.ObjectId, quantity: Number}]
// })

// ------------------------------------------product api--------------------------------

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});
app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ _id: id });
  res.send(product);
});
app.get("/probycat/:catagory", async (req, res) => {
  const catagory = req.params.catagory;
  const products = await Product.find({ Category: catagory });
  res.send(products);
});

// ------------------------------cart -------------need rework ------------------------------
app.get("/cart/:id", async (req, res) => {
  const id = req.params.id;
  const cart = await User.findOne({ _id: id });
  res.send(cart);
});

// --------------------------------------------login /signup---------------------------------

app.post("/getemail", async (req, res) => {
  const { email } = req.body;
  // ----------------------function to  send /otp------------------
  let user = await User.findOne({ email });
  const mail = await nodeMailer.createTransport({
    service: "gmail",
    port: 587, //465
    auth: {
      user: "cyno28cyno@gmail.com",
      pass: process.env.PASS,
    },
  });
  let otp = Math.floor(Math.random() * 1000000);

  const info = await mail.sendMail({
    from: "BigBasket",
    to: `${email}`,
    subject: "Bigbasket Login Using OTP",
    html: `
    <div id=":1a1" class="a3s aiL"><u></u> <table width="100%" cellspacing="0" cellpadding="0"
        border="0"
        bgcolor="#ffffff"
      >
        <tbody>
          <tr>
            <td style="padding: 8px 0px" valign="top" align="center">
              <table
                style="table-layout: fixed"
                width="500"
                cellspacing="0"
                cellpadding="0"
                border="0"
                bgcolor="#f7f7f7"
                align="center"
              >
                <tbody>
                  <tr>
                    <td
                      valign="top"
                      background="https://ci3.googleusercontent.com/proxy/B1GwWBRVVxNNlWgOLHEMWDkrJES393v7-yzfZfzw1kKNkT2acRELPstkXytjQi2sMgpOr2KaCoTEPpJTGIA3rcYrJGOS__Ol0LplM-rHrIQTFBYmznm2mTs1MXHHzTE8VJAgiRw5SGiLzf5gM1glYqAQkI9snAPsQToXb0I=s0-d-e1-ft#https://run.resulticks.com//Uploads//Campaigns/edm/5d69508b-a51d-4a53-a75c-d5e24a34c73b/images/pattern.png"
                      align="center"><table
                        style="width: 500px" width="500" cellspacing="0" cellpadding="0"
                        border="0"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="line-height: 0px; font-size: 0px"
                              height="20"
                            >
                              &nbsp;
                            </td>
                          </tr>
                          <tr>
                            <td valign="top" align="center">
                              <table
                                style="width: 460px"
                                width="460"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="width: 143px"
                                      width="143"
                                      valign="middle"
                                    >
                                      <a
                                        href="https://lcs.rsut.io/EdmTrack/ReUrl?url=f867e614-c811-466f-9bb9-1fe89bcc52d4&amp;dbid=camp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6&amp;bid=4&amp;cid=5d69508b-a51d-4a53-a75c-d5e24a34c73b&amp;sid=9e662dac-a4b0-40de-8fe8-f27105c2dc5e&amp;rid=e_2553adb8g&amp;pid=e_2553adb8g&amp;utm_source=Resulticks_web&amp;utm_medium=comm&amp;utm_campaign=ZeK&amp;campname=TG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0&amp;resul=RNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc="
                                        rel="tooltip"
                                        target="_blank"
                                        data-saferedirecturl="https://www.google.com/url?q=https://lcs.rsut.io/EdmTrack/ReUrl?url%3Df867e614-c811-466f-9bb9-1fe89bcc52d4%26dbid%3Dcamp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6%26bid%3D4%26cid%3D5d69508b-a51d-4a53-a75c-d5e24a34c73b%26sid%3D9e662dac-a4b0-40de-8fe8-f27105c2dc5e%26rid%3De_2553adb8g%26pid%3De_2553adb8g%26utm_source%3DResulticks_web%26utm_medium%3Dcomm%26utm_campaign%3DZeK%26campname%3DTG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0%26resul%3DRNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc%3D&amp;source=gmail&amp;ust=1661534270693000&amp;usg=AOvVaw3j47tZ7QQW0UTuLklYgJPa"
                                      >
                                      </a
                                      ><a
                                        href="https://lcs.rsut.io/EdmTrack/ReUrl?url=81bf3638-dbfe-436c-8437-a296226486ab&amp;dbid=camp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6&amp;bid=4&amp;cid=5d69508b-a51d-4a53-a75c-d5e24a34c73b&amp;sid=9e662dac-a4b0-40de-8fe8-f27105c2dc5e&amp;rid=e_2553adb8g&amp;pid=e_2553adb8g&amp;utm_source=Resulticks_web&amp;utm_medium=comm&amp;utm_campaign=ZeK&amp;campname=TG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0&amp;resul=RNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc="
                                        rel="tooltip"
                                        target="_blank"
                                        data-saferedirecturl="https://www.google.com/url?q=https://lcs.rsut.io/EdmTrack/ReUrl?url%3D81bf3638-dbfe-436c-8437-a296226486ab%26dbid%3Dcamp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6%26bid%3D4%26cid%3D5d69508b-a51d-4a53-a75c-d5e24a34c73b%26sid%3D9e662dac-a4b0-40de-8fe8-f27105c2dc5e%26rid%3De_2553adb8g%26pid%3De_2553adb8g%26utm_source%3DResulticks_web%26utm_medium%3Dcomm%26utm_campaign%3DZeK%26campname%3DTG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0%26resul%3DRNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc%3D&amp;source=gmail&amp;ust=1661534270693000&amp;usg=AOvVaw2VOwZ9uwgaoMqywTWdQvw6"
                                      >
                                        <img
                                          src="https://ci4.googleusercontent.com/proxy/wIjHW2t922nYABW5torSwBkxILZY9509ARjmqpsONzEiryGiGxXUHPM7lfol10YeIP5U3HXrZ0QJn_kt_ahur6OvZmIscX6dx1Z1xJ4885b62UKnDDI71RNT6omCWIm6I70qOMpMFJ8WtQIIxtkEJjVoKDU4Ynrobuzyaow=s0-d-e1-ft#https://run.resulticks.com//Uploads//Campaigns/edm/5d69508b-a51d-4a53-a75c-d5e24a34c73b/images/bb-logo.png"
                                          style="display: block"
                                          width="178"
                                          height="40"
                                          border="0"
                                          class="CToWUd"
                                          data-bit="iit"
                                      /></a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style="width: 12px" width="12">
                                      &nbsp;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="line-height: 0px; font-size: 0px" height="20">
                      &nbsp;
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <table
        width="500"
        cellspacing="0"
        cellpadding="0"
        border="0"
        align="center"
      >
        <tbody>
          <tr>
            <td style="width: 20px" width="20">&nbsp;</td>

            <td valign="top" align="center">
              <table
                style="width: 460px"
                width="460"
                cellspacing="0"
                cellpadding="0"
                border="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td valign="top" align="center">
                      <table
                        style="width: 460px"
                        width="460"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td
                              style="width: 1px"
                              width="1"
                              bgcolor="#ededed"
                            ></td>

                            <td valign="top" align="center">
                              <table
                                style="width: 458px"
                                width="458"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="
                                        height: 1px;
                                        line-height: 0px;
                                        font-size: 0px;
                                      "
                                      height="1"
                                      bgcolor="#ededed"
                                    ></td>
                                  </tr>

                                  <tr>
                                    <td
                                      style="padding: 12px 0px"
                                      bgcolor="#ffffff"
                                    >
                                      <table
                                        style="width: 458px"
                                        width="458"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style="width: 15px"
                                              width="15"
                                            ></td>

                                            <td
                                              style="
                                                font-family: Arial, sans-serif;
                                                font-size: 18px;
                                                color: #222222;
                                                vertical-align: middle;
                                              "
                                              valign="top"
                                              align="left"
                                            >
                                              Login using OTP:
                                              <b>${otp} <b></b></b>
                                            </td>

                                            <td style="width: 30px" width="30">
                                              <img
                                                src="https://ci3.googleusercontent.com/proxy/MbiYwPz2MVoh8bsJuzyHuJPxyUJXgVD_WzZRFjGUr9LQtiKRZSMTHUUFes_GIM761DpU06mJd0RN2V-OmmRaQk6c-DaclKukkSrC0AMARbJsQgM13EShmm0m8h82litxO39bAsAs9zCeniXVz4AFo2c8p2fHVRJ0as4b-hBz=s0-d-e1-ft#https://run.resulticks.com//Uploads//Campaigns/edm/5d69508b-a51d-4a53-a75c-d5e24a34c73b/images/ic-reset.png"
                                                style="display: block"
                                                border="0"
                                                class="CToWUd"
                                                data-bit="iit"
                                              />
                                            </td>

                                            <td
                                              style="width: 16px"
                                              width="30"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td
                                      style="
                                        height: 1px;
                                        line-height: 0px;
                                        font-size: 0px;
                                      "
                                      height="1"
                                      bgcolor="#ededed"
                                    ></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>

                            <td style="width: 1px" width="1" bgcolor="#ededed">
                              <img
                                src="https://ci3.googleusercontent.com/proxy/MbiYwPz2MVoh8bsJuzyHuJPxyUJXgVD_WzZRFjGUr9LQtiKRZSMTHUUFes_GIM761DpU06mJd0RN2V-OmmRaQk6c-DaclKukkSrC0AMARbJsQgM13EShmm0m8h82litxO39bAsAs9zCeniXVz4AFo2c8p2fHVRJ0as4b-hBz=s0-d-e1-ft#https://run.resulticks.com//Uploads//Campaigns/edm/5d69508b-a51d-4a53-a75c-d5e24a34c73b/images/ic-reset.png"
                                style="display: block"
                                width="1"
                                height="1"
                                border="0"
                                class="CToWUd"
                                data-bit="iit"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="line-height: 0px; font-size: 0px" height="8">
                      &nbsp;
                    </td>
                  </tr>

                  <tr>
                    <td valign="top" bgcolor="#fff" align="center">
                      <table
                        style="width: 460px"
                        width="460"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <table
                                style="width: 460px"
                                width="460"
                                cellspacing="0"
                                cellpadding="0"
                                border="0"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style="width: 1px"
                                      width="1"
                                      bgcolor="#ededed"
                                    ></td>

                                    <td valign="top" align="center">
                                      <table
                                        style="width: 458px"
                                        width="458px"
                                        cellspacing="0"
                                        cellpadding="0"
                                        border="0"
                                        bgcolor="#ffffff"
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style="
                                                height: 1px;
                                                line-height: 0px;
                                                font-size: 0px;
                                              "
                                              height="1"
                                              bgcolor="#ededed"
                                            ></td>
                                          </tr>

                                          <tr>
                                            <td
                                              style="
                                                font-family: Arial, sans-serif;
                                                font-size: 16px;
                                                color: #444444;
                                                line-height: 24px;
                                                padding: 16px;
                                              "
                                              valign="top"
                                              align="left"
                                            >
                                              Hi Customer,

                                              <br />
                                              Use the OTP ${otp}to login.
                                              <br /><span class="im">
                                                The code is valid for 15 minutes
                                                and can be used only once.
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>

                                    <td
                                      style="width: 1px"
                                      width="1"
                                      bgcolor="#ededed"
                                    ></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>

                          <tr>
                            <td
                              style="
                                height: 1px;
                                line-height: 0px;
                                font-size: 0px;
                              "
                              height="1"
                              bgcolor="#ededed"
                            ></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        padding: 16px 0px 13px 8px;
                        color: #444444;
                        line-height: 24px;
                      "
                      valign="top"
                      background="https://ci3.googleusercontent.com/proxy/B1GwWBRVVxNNlWgOLHEMWDkrJES393v7-yzfZfzw1kKNkT2acRELPstkXytjQi2sMgpOr2KaCoTEPpJTGIA3rcYrJGOS__Ol0LplM-rHrIQTFBYmznm2mTs1MXHHzTE8VJAgiRw5SGiLzf5gM1glYqAQkI9snAPsQToXb0I=s0-d-e1-ft#https://run.resulticks.com//Uploads//Campaigns/edm/5d69508b-a51d-4a53-a75c-d5e24a34c73b/images/pattern.png"
                      align="left"
                    >
                      See you soon,

                      <br />
                      Team bigbasket
                    </td>
                  </tr>

                  <tr>
                    <td
                      style="height: 1px; line-height: 0px; font-size: 0px"
                      bgcolor="#ededed"
                    ></td>
                  </tr>

                  <tr>
                    <td style="height: 10px" height="10">&nbsp;</td>
                  </tr>
                </tbody>
              </table>
              <span class="im">
                <table
                  style="width: 460px"
                  width="460"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  align="center"
                >
                  <tbody>
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          padding-bottom: 14px;
                          font-weight: bold;
                          font-size: 14px;
                          color: #333333;
                          line-height: 22px;
                        "
                        valign="top"
                        align="center"
                      >
                        Need any help?
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          padding-bottom: 10px;
                          font-size: 14px;
                          color: #333333;
                          line-height: 22px;
                        "
                        valign="top"
                        align="center"
                      >
                        Contact us any day between 7 AM to 10 PM. We are happy
                        to help.
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: Arial, sans-serif;
                          padding-bottom: 11px;
                          font-size: 14px;
                          color: #333333;
                          line-height: 26px;
                        "
                        valign="top"
                        align="center"
                      >
                        <a
                          href="mailto:customerservice@bigbasket.com"
                          style="color: #1a13c8; text-decoration: none"
                          rel="tooltip"
                          target="_blank"
                          >Email Us</a
                        >
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 18601231000
                        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                        <a
                          href="https://lcs.rsut.io/EdmTrack/ReUrl?url=85abb161-1996-42f8-9727-d75f075ddefd&amp;dbid=camp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6&amp;bid=4&amp;cid=5d69508b-a51d-4a53-a75c-d5e24a34c73b&amp;sid=9e662dac-a4b0-40de-8fe8-f27105c2dc5e&amp;rid=e_2553adb8g&amp;pid=e_2553adb8g&amp;utm_source=Resulticks_web&amp;utm_medium=comm&amp;utm_campaign=ZeK&amp;campname=TG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0&amp;resul=RNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc="
                          style="color: #1a13c8; text-decoration: none"
                          rel="tooltip"
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=https://lcs.rsut.io/EdmTrack/ReUrl?url%3D85abb161-1996-42f8-9727-d75f075ddefd%26dbid%3Dcamp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6%26bid%3D4%26cid%3D5d69508b-a51d-4a53-a75c-d5e24a34c73b%26sid%3D9e662dac-a4b0-40de-8fe8-f27105c2dc5e%26rid%3De_2553adb8g%26pid%3De_2553adb8g%26utm_source%3DResulticks_web%26utm_medium%3Dcomm%26utm_campaign%3DZeK%26campname%3DTG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0%26resul%3DRNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc%3D&amp;source=gmail&amp;ust=1661534270693000&amp;usg=AOvVaw3Xjp3ox4vm0OPLSJvLhCsC"
                          >Ask Us</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="height: 1px; line-height: 0px; font-size: 0px"
                        bgcolor="#e1e1e6"
                      ></td>
                    </tr>
                    <tr>
                      <td style="padding: 15px 0px 25px 0px" align="center">
                        <table
                          style="width: 160px"
                          width="160"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                          align="center"
                        >
                          <tbody>
                            <tr>
                              <td style="width: 25px" width="25">
                                <a
                                  href="https://lcs.rsut.io/EdmTrack/ReUrl?url=0c5be60e-6a35-4605-b4ad-489cbd1c0a01&amp;dbid=camp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6&amp;bid=4&amp;cid=5d69508b-a51d-4a53-a75c-d5e24a34c73b&amp;sid=9e662dac-a4b0-40de-8fe8-f27105c2dc5e&amp;rid=e_2553adb8g&amp;pid=e_2553adb8g&amp;utm_source=Resulticks_web&amp;utm_medium=comm&amp;utm_campaign=ZeK&amp;campname=TG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0&amp;resul=RNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc="
                                  rel="tooltip"
                                  target="_blank"
                                  data-saferedirecturl="https://www.google.com/url?q=https://lcs.rsut.io/EdmTrack/ReUrl?url%3D0c5be60e-6a35-4605-b4ad-489cbd1c0a01%26dbid%3Dcamp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6%26bid%3D4%26cid%3D5d69508b-a51d-4a53-a75c-d5e24a34c73b%26sid%3D9e662dac-a4b0-40de-8fe8-f27105c2dc5e%26rid%3De_2553adb8g%26pid%3De_2553adb8g%26utm_source%3DResulticks_web%26utm_medium%3Dcomm%26utm_campaign%3DZeK%26campname%3DTG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0%26resul%3DRNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc%3D&amp;source=gmail&amp;ust=1661534270693000&amp;usg=AOvVaw2xtzklklFQ7ChL0tHmRnZd"
                                  ><img
                                    src="https://ci4.googleusercontent.com/proxy/B5e_JH7-q2FD77sbRdudF4_VO9mLiPOaNBYWX3BIMqK1LiZ0egDWRwHi5DtVbR3OdDFDAnBuXu0Uf3yrDc7PbywTfwRyvQ_QS--_pHaPaLhtUErj2NT_kvnWNj0B8DPhshOKGD2PsmLHMhufy1Rbw2RCXp_I_5qB=s0-d-e1-ft#https://run.resulticks.com//Uploads//Campaigns/edm/5d69508b-a51d-4a53-a75c-d5e24a34c73b/images/fb.png"
                                    style="display: block; max-width: 25px"
                                    width="25"
                                    height="25"
                                    border="0"
                                    class="CToWUd"
                                    data-bit="iit"
                                /></a>
                              </td>
                              <td style="width: 27px" width="27">&nbsp;</td>
                              <td style="width: 25px" width="25">
                                <a
                                  href="https://lcs.rsut.io/EdmTrack/ReUrl?url=4f2ecee5-7081-48e3-8497-67e8e75e5c7d&amp;dbid=camp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6&amp;bid=4&amp;cid=5d69508b-a51d-4a53-a75c-d5e24a34c73b&amp;sid=9e662dac-a4b0-40de-8fe8-f27105c2dc5e&amp;rid=e_2553adb8g&amp;pid=e_2553adb8g&amp;utm_source=Resulticks_web&amp;utm_medium=comm&amp;utm_campaign=ZeK&amp;campname=TG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0&amp;resul=RNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc="
                                  rel="tooltip"
                                  target="_blank"
                                  data-saferedirecturl="https://www.google.com/url?q=https://lcs.rsut.io/EdmTrack/ReUrl?url%3D4f2ecee5-7081-48e3-8497-67e8e75e5c7d%26dbid%3Dcamp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6%26bid%3D4%26cid%3D5d69508b-a51d-4a53-a75c-d5e24a34c73b%26sid%3D9e662dac-a4b0-40de-8fe8-f27105c2dc5e%26rid%3De_2553adb8g%26pid%3De_2553adb8g%26utm_source%3DResulticks_web%26utm_medium%3Dcomm%26utm_campaign%3DZeK%26campname%3DTG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0%26resul%3DRNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc%3D&amp;source=gmail&amp;ust=1661534270693000&amp;usg=AOvVaw3peWGEPuUlgM6u0taQgqq1"
                                  ><img
                                    src="https://ci3.googleusercontent.com/proxy/QMuIGxqmsg9nr6ashvvQ31Y_VYfzVFH4ZCSEZ6p2B6bw9cksA97Jx3mg4gSuFHAL6m_37SI0jeK_l4lHWI1TwTdETtBdDuJTjhMzcf8pbrdkidvXCqkklJnp-zjtSziGyUG_4Hj0QASq8_F_SmyP6P8IEWr9BYby1MQYNNA=s0-d-e1-ft#https://run.resulticks.com//Uploads//Campaigns/edm/5d69508b-a51d-4a53-a75c-d5e24a34c73b/images/twitter.png"
                                    style="display: block; max-width: 25px"
                                    width="25"
                                    height="25"
                                    border="0"
                                    class="CToWUd"
                                    data-bit="iit"
                                /></a>
                              </td>
                              <td style="width: 27px" width="27">&nbsp;</td>
                              <td style="width: 25px" width="25">
                                <a
                                  href="https://lcs.rsut.io/EdmTrack/ReUrl?url=47104ef6-05ca-4b15-b71b-cac102ccd872&amp;dbid=camp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6&amp;bid=4&amp;cid=5d69508b-a51d-4a53-a75c-d5e24a34c73b&amp;sid=9e662dac-a4b0-40de-8fe8-f27105c2dc5e&amp;rid=e_2553adb8g&amp;pid=e_2553adb8g&amp;utm_source=Resulticks_web&amp;utm_medium=comm&amp;utm_campaign=ZeK&amp;campname=TG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0&amp;resul=RNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc="
                                  rel="tooltip"
                                  target="_blank"
                                  data-saferedirecturl="https://www.google.com/url?q=https://lcs.rsut.io/EdmTrack/ReUrl?url%3D47104ef6-05ca-4b15-b71b-cac102ccd872%26dbid%3Dcamp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6%26bid%3D4%26cid%3D5d69508b-a51d-4a53-a75c-d5e24a34c73b%26sid%3D9e662dac-a4b0-40de-8fe8-f27105c2dc5e%26rid%3De_2553adb8g%26pid%3De_2553adb8g%26utm_source%3DResulticks_web%26utm_medium%3Dcomm%26utm_campaign%3DZeK%26campname%3DTG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0%26resul%3DRNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc%3D&amp;source=gmail&amp;ust=1661534270693000&amp;usg=AOvVaw0dZIkM1f_HWVZMEaxLIVWr"
                                  ><img
                                    src="https://ci5.googleusercontent.com/proxy/zl61BOl9drWVRmgYC2rswedeKvhyA7pp1qwTX8TBewQKeh7jBhqVX0hK5uMnLAJp4YRJe8zM9e4LOa8BGxbm-YTfI3DcBAUis07Q450OUa8eS5pB2345vcGSIrhJKiZO5twdboJcuBufbSesr8QwRTBaOaHhibwsItav8LIxYg=s0-d-e1-ft#https://run.resulticks.com//Uploads//Campaigns/edm/5d69508b-a51d-4a53-a75c-d5e24a34c73b/images/instagram.png"
                                    style="display: block; max-width: 25px"
                                    width="25"
                                    height="25"
                                    border="0"
                                    class="CToWUd"
                                    data-bit="iit"
                                /></a>
                              </td>
                              <td style="width: 27px" width="27">&nbsp;</td>
                              <td style="width: 25px" width="25">
                                <a
                                  href="https://lcs.rsut.io/EdmTrack/ReUrl?url=c156ebf6-c677-415e-9fa1-28f986fa7b2b&amp;dbid=camp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6&amp;bid=4&amp;cid=5d69508b-a51d-4a53-a75c-d5e24a34c73b&amp;sid=9e662dac-a4b0-40de-8fe8-f27105c2dc5e&amp;rid=e_2553adb8g&amp;pid=e_2553adb8g&amp;utm_source=Resulticks_web&amp;utm_medium=comm&amp;utm_campaign=ZeK&amp;campname=TG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0&amp;resul=RNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc="
                                  rel="tooltip"
                                  target="_blank"
                                  data-saferedirecturl="https://www.google.com/url?q=https://lcs.rsut.io/EdmTrack/ReUrl?url%3Dc156ebf6-c677-415e-9fa1-28f986fa7b2b%26dbid%3Dcamp_f74faf69_ef47_4c8c_b1ff_1ac2db6383f6%26bid%3D4%26cid%3D5d69508b-a51d-4a53-a75c-d5e24a34c73b%26sid%3D9e662dac-a4b0-40de-8fe8-f27105c2dc5e%26rid%3De_2553adb8g%26pid%3De_2553adb8g%26utm_source%3DResulticks_web%26utm_medium%3Dcomm%26utm_campaign%3DZeK%26campname%3DTG9naW4gRW1haWwgT1RQIEJpZyBCYXNrZXRfMjBfT2N0%26resul%3DRNr_SF9aZUtfZW1fbmFfZV8yNTUzYWRiOGc%3D&amp;source=gmail&amp;ust=1661534270693000&amp;usg=AOvVaw2KhGgBFVrtPfn7N0t0zel4"
                                  ><img
                                    src="https://ci6.googleusercontent.com/proxy/dnzmBFjBeF4RvqSgDPUi-Dx8mcp32T18xAK4LoHPWOCfxziHpjrvcZasiJ6U92GqyzBwQl1_93P6g0nUS4eZPmPI0KGsqv2bVkuohT_hAP15TZokgvreNVs8yIIoccrySpQZnZxVi9t9XqG_tc6G-RF8Yq4vi2_sGO15X-_8=s0-d-e1-ft#https://run.resulticks.com//Uploads//Campaigns/edm/5d69508b-a51d-4a53-a75c-d5e24a34c73b/images/pintrest.png"
                                    style="display: block; max-width: 25px"
                                    width="25"
                                    height="25"
                                    border="0"
                                    class="CToWUd"
                                    data-bit="iit"
                                /></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </span>
            </td>
            <td style="width: 20px" width="20">&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <div
        style="
          display: none;
          white-space: nowrap;
          font: 20px courier;
          color: #ffffff;
        "
      >
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp;
      </div>
      <div id="m_-6062428813892159190_t"></div>
      <img
        alt=""
        src="https://ci5.googleusercontent.com/proxy/U2sPwy6azkNVJTDGVwTfZYUdVAu_yruL6p0n0ULsCtPg9d_LOPVcPdHkK1uLELHacxdZiOXcqTqjL54Hr1g=s0-d-e1-ft#https://lco.rsut.io/RNrHZeKEe_2553adb8gnaPO"
        width="1"
        height="1"
        border="0"
        class="CToWUd"
        data-bit="iit"
      />
      <div class="yj6qo"></div>
      <div class="adL"></div>
    </div>
`,
  });

  if (user) {
    // const token = jwt.sign({ email: user.email, otp: otp }, "secret");
    res.send({email: user.email, otp: otp});
  } else {
    // const token = jwt.sign({ otp }, "secret");
    res.send({otp});
  }
});

app.post("/login", async (req, res) => {
  const user = await new User(req.body);
  user.save();

  let token = jwt.sign({ email: user.email }, "secret");
  res.send(token);
});

// ----------------------------------cart--------------------------
app.post("/cart", async (req, res) => {
  let { id } = req.body;

  const cart = await User.findOne({ _id: id });

  res.send(cart.cart);
});
// make the put and update routes for cart-------------------
app.post('/cart/updateone',async(req,res)=>{
    const {id,productid} = req.body
    let cart = await User.findOne({ _id: id });
  
    for(let i=0;i<cart.cart.length;i++){
        if(cart.cart[i]. productId==productid){
            cart.cart[i].quantity=cart.cart[i].quantity+1
    }
}
    await User.findOneAndUpdate({ _id: id },cart);
    res.send("done")
    })

// -------------------------------connection --------------------

app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Listenting on port ${PORT}...`);
  } catch {
    console.log("runtime err");
  }
});
