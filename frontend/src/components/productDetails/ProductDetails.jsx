import React from "react";
import styled from "styled-components";
import { Details } from "./Details";
import { Info } from "./Info";

const Wrapper = styled.div`
  width: 82%;
  margin: auto;
  margin-top: 40px;
`;
export const ProductDetails = () => {
  return (
    <Wrapper>
      <Info />
      <Details />
    </Wrapper>
  );
};
