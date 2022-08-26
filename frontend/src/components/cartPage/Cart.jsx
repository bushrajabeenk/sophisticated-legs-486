import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

import {
    Box,
    Table,
    Thead,
    Tbody,
    Flex,
    Tr,
    Th,
    Td,
    Button,
    TableContainer,
    Text,
    Heading,
} from "@chakra-ui/react";
// import { Navigate, useNavigate } from "react-router";
// import { Decrement_Products_Qty, GetCartData, Increment_Products_Qty } from "../../redux/actions/action";
export const Cart = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const cart = useSelector((state) => state.Products?.CartData[0]?.cartItems);
    // const total = useSelector((state) => state.Products.total);
    // console.log("total", total?.total);


    // console.log("cart", cart);
    //   console.log(cart);


    // useEffect(() => {
    //     dispatch(GetCartData());

    // }, [dispatch]);

    let cart = [
        {
            Brand: 'BB Royal',
            Title: 'Organic - Toor Dal/Togari Bele',
            Description: 'Toor Dal is not only delicious but also has nutritional value. It contains a good amount of fibre. Toor dal is an excellent source of nutrients and plant protein, and it also contains dietary fibre. In essence, legumes are nutritional though they represent a low-fat and low-cholesterol alternative. Legumes such as toor dal provide essential nutrients, fibre and protein for vegetarians. Toor dal rich in protein, vitamins and iron is often served with rich spices over rice and Rotis.',
            Image_url: 'https://www.bigbasket.com/media/uploads/p/l/40135858_8-bb-royal-organic-turtoor-dal.jpg',
            Price: 649,
            Category: 'Foodgrains_oil_masala'
          },
          {
            Title: 'Milky Mist Farm Fresh Curd/Dahi - Premium, No Preservatives',
            Brand: 'Milky Mist',
            Description: 'Milky Mist Curd Farm Fresh is a rich supply of calcium and proteins. Prepared from better quality pasteurised toned milk to provide you with the right width and texture. The live and active bacterial culture included in Milky Mist Curd helps digestion and lets you live a strong active life.',
            Image_url: 'https://www.bigbasket.com/media/uploads/p/l/40003162_4-milky-mist-curd-farm-fresh.jpg',
            Price: 43,
            Category: 'Bakery_cakes_dairy'
          }
    ]

    let saved = 0;
    return (
        <Box width="100%">
            {/* <Topnavbar /> */}
            <Box width="75%" m={"auto"}>
                <Box
                    width="100%"
                    margin="auto"
                    p="1rem"
                    mt="1.5rem"
                    border="1px solid #e8e8e8"
                // border="1px solid red"
                >
                    <Text
                        fontSize={"24px"}
                        textAlign={"left"}
                        fontWeight={300}
                        borderBottom={"1px solid #e8e8e8"}
                        pb={"6px"}
                    >
                        {/* YOUR BASKET {cart?.length} */}
                        YOUR BASKET (01 item)
                    </Text>
                    <TableContainer width="99%">
                        <Table variant="simple">
                            <Thead width="99%">
                                <Tr
                                    bg={"#555555"}
                                    color={"white"}
                                    justifyContent={"space-between"}
                                >
                                    <Th color={"white"}>ITEM DESCRIPTION</Th>
                                    <Th color={"white"}>UNIT PRICE</Th>
                                    <Th color={"white"}>QUANTITY</Th>
                                    <Th color={"white"}>SUBTOTAL</Th>
                                    <Th color={"#555555"}>......</Th>
                                    <Th color={"black"} bg={"#c6cc74"}>
                                        Saving
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {cart?.map((e) => {
                                    {saved = saved + (Math.floor(e.Price) - Math.floor(e.Price - (10 * e.Price) / 100));}


                                    return (
                                        <Tr>
                                            <Td fontSize={"12px"}>
                                                {e.Title}
                                                <br></br>
                                            </Td>
                                            <Td>
                                                <br></br>
                                                <span>
                                                    Rs. {e.Price}
                                                </span>
                                            </Td>
                                            <Td>
                                                <Button
                                                    // onClick={() => dispatch(Decrement_Products_Qty(e._id))}
                                                    variant={"outline"}
                                                    m={"2px"}
                                                >
                                                    -
                                                </Button>
                                                <Button variant={"outline"} m={"2px"}>
                                                    {e.quantity}
                                                </Button>
                                                <Button
                                                    // onClick={() => dispatch(Increment_Products_Qty(e._id))}
                                                    variant={"outline"}
                                                    m={"2px"}
                                                >
                                                    +
                                                </Button>
                                            </Td>
                                            <Td>Rs  {Math.floor(e.Price - (10 * e.Price) / 100) * e.quantity}

                                            </Td>
                                            <Td>
                                                {" "}
                                                Rs{" "}
                                                {Math.floor(
                                                    e.Price - Math.floor(e.Price - (10 * e.Price) / 100))}
                                            </Td>
                                            <Td>
                                            </Td>
                                        </Tr>
                                    );
                                })}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <Flex justifyContent={"space-between"} mt={8}>
                        <Box width={"45%"}>
                            <Button variant={"outline"} float={"left"}>
                                Empty Basket
                            </Button>
                        </Box>
                        <Box width={"45%"} border="1px solid #e8e8e8 ">
                            <Flex
                                justifyContent={"space-between"}
                                p="1rem"
                                textAlign={"left"}
                                fontSize="14px"
                                fontWeight={400}
                            >
                                <Box>
                                    <Text>rs</Text>
                                    <Text>Delivery Charges</Text>
                                </Box>
                                <Box>
                                    <Text>Rs</Text>
                                    <Text>***</Text>
                                </Box>
                                <Box borderLeft={"1px solid #e8e8e8"} color="red" pl="2px">
                                    <Text>You saved!</Text>
                                    <Text>Rs</Text>
                                </Box>
                            </Flex>
                            <Flex
                                textAlign={"left"}
                                border={"1px solid #e8e8e8"}
                                padding="2rem"
                                justify={"space-around"}
                            >
                                <Heading as={"h6"} fontWeight="250">

                                </Heading>
                                <Heading as={"h6"} fontWeight="250">
                                    {/* ₹{total} */}
                                    ₹ 300.00
                                </Heading>
                            </Flex>
                            <Box float={"right"}>
                                <Button
                                    variant={"outline"}
                                    onClick={() => {
                                        if (cart.length !== 0) {
                                            // navigate("/address");
                                        } else {
                                            alert(
                                                "Your Cart is Empty, Please Add items into cart and after check it out"
                                            );
                                            // navigate("/product");
                                        }
                                    }}
                                >
                                    {" "}
                                    CheckOut
                                </Button>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};