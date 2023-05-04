import React from "react";
import styled from "styled-components";

export const Modal = ({ setOpenModal }) => {
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <Container>
      <ContainerSecond>
        <div>
          <h3>Barbecue Burger</h3>
          <ModalPrice>$22.99</ModalPrice>
          <ModalSpan>x1</ModalSpan>
        </div>
        <div>
          <button>-</button>
          <button>+</button>
        </div>
        <button onClick={closeModal}>close</button>
      </ContainerSecond>
    </Container>
  );
};

const Container = styled.div`
  background-color: aqua;
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  width: 100%;
  z-index: 3;
  height: 100%;
`;
const ContainerSecond = styled.div`
  width: 500px;
  height: 200px;
  background-color: #fff;
  display: flex;
`;
const ModalSpan = styled.span`
  width: 46px;
  height: 36px;
  display: inline-block;
  text-align: center;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
`;
const ModalPrice = styled.span`
  width: 60px;
  height: 27px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #ad5502;
  display: inline-block;
`;
