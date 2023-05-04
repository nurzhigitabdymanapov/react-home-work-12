import React from "react";
import styled from "styled-components";

export const Button = () => {
  return <Buttons>+ Add</Buttons>;
};
const Buttons = styled.div`
  width: 99px;
  height: 41px;
  background: #8a2b06;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  &:hover {
    background-color: #7e2a0a;
    &:active {
      background-color: #993108;
    }
    &:disabled {
      background-color: #cac6c4;
    }
  }
`;
