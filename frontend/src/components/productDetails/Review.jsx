import React from "react";
import styled from "styled-components";
import { HeadLine } from "./Details";

const Wrapper = styled.div`
  border: 1px solid #e7e3e3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  text-align: center;
  padding: 20px 0;
`;

const IMG = styled.img`
  width: 100px;
  border-radius: 12px;
  opacity: .6
`;

const ParaDiv = styled.div`
font-size: 14px;
color: #4a4a4a;

`
export const Review = () => {
  return (
    <div>
      <HeadLine>Rating and Reviews</HeadLine>
      <Wrapper>
        <div>
          <IMG
            src="https://media.istockphoto.com/vectors/top-rating-application-vector-id950430652?k=20&m=950430652&s=612x612&w=0&h=IcDmigqJJk51xhsHBSUbtylZJ8BLxjeiWq9Se9uRWlU="
            alt=""
          />
        </div>
        <ParaDiv>
          <p>Want to rate this product ?</p>
          <p>
            You can rate and review this product <br/> only after purchasing from
            bigbasket
          </p>
        </ParaDiv>
      </Wrapper>
    </div>
  );
};
