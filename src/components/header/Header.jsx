import  ReactDOM  from "react-dom";
import React, { useState } from "react";
import styled from "styled-components";
import { Busket } from "./Busket";
import { Modal } from "../modal/Modal";




export const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  
  const addModal = () => {
    setOpenModal(true);
    console.log("open");
  };
  return (
    <Container>
        <h1>ReactMeals</h1>
        {
          openModal && ReactDOM.createPortal(
            <Modal
            setOpenModal={setOpenModal}
            />,
            document.getElementById("modal")
            )
          }
          <Busket onClick={addModal} >Your Cart</Busket>
    </Container>
  );
};

const Container = styled.header`
  height: 101px;
  width: 100%;
  background-color: #8a2b06;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  color: #fff;
`;
