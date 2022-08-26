import React from "react";
import { HeadLine } from "./Details";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
`;

const Box = styled.div`
  width: 180px;
  border: 1px solid #e7e3e3;
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;

  & p {
    // padding: 0;
    margin: 0;
  }
`;

const Tag = styled.p`
  color: #999999;
  padding: 0;
  margin: 0;
  padding-top: 10px;
`;

const P = styled.p`
  font-size: 14px;
  padding-top: 10px;
`;

const P1 = styled.p`
  height: 35px;
`;

const Btn = styled.button`
  border: none;
  border-radius: 3px;
  background-color: rgb(132, 194, 37);
  color: #fff;
  padding: 8px 10px;
  width: 70px;
  margin: auto;
  margin-top: 10px;
`;
export const Similar = () => {
  let data = [
    {
      img: "https://www.bigbasket.com/media/uploads/p/s/40004992_14-fresho-sweet-corn.jpg",
      title: "Fresho Sweet Corn (Loose)",
      quant: "2pcs",
      price: 31,
    },
    {
      img: "https://www.bigbasket.com/media/uploads/p/s/10000005_27-fresho-apple-royal-gala-economy.jpg",
      title: "Fresho Apple - Royal Gala Economy",
      quant: "4pcs",
      price: 147.29,
    },
    {
      img: "https://www.bigbasket.com/media/uploads/p/s/10000335_15-fresho-lemon.jpg",
      title: "Fresho Lemon (Loose)",
      quant: "1kg",
      price: 138,
    },
    {
      img: "https://www.bigbasket.com/media/uploads/p/s/10000137_19-fresho-mint-leaves-cleaned-without-roots.jpg",
      title: "Fresho Mint Leaves - Cleaned, without roots",
      quant: "100g",
      price: 6.5,
    },
    {
      img: "https://www.bigbasket.com/media/uploads/p/s/10000087_17-fresho-chow-chow.jpg",
      title: "Fresho Chow Chow (Loose)",
      quant: "500g",
      price: 10.5,
    },
    {
      img: "https://www.bigbasket.com/media/uploads/p/s/40089741_2-fresho-beans-haricot.jpg",
      title: "Fresho Beans-Haricot (Loose)",
      quant: "1kg",
      price: 50.66,
    },
  ];
  return (
    <div>
      <HeadLine>Frequently Bought Together</HeadLine>
      <Wrapper>
        {data.map((e) => (
          <Box>
            <img src={e.img} alt="" />
            <Tag>Fresho</Tag>
            <P1>{e.title}</P1>
            <P>
              {e.quant} - Rs. {e.price}
            </P>
            <P>Rs. {e.price}</P>
            <Btn>ADD</Btn>
          </Box>
        ))}
      </Wrapper>
    </div>
  );
};
