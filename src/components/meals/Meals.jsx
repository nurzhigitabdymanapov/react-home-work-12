import React from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { product } from "../../utils/Products";

export const Meals = () => {
  return (
    <ContainerMeals>
      <ConstainerSecondMeals>
        {product.map((el) => {
          return (
            <MealsItem>
              <MealsItemCont>
                <h3>{el.title}</h3>
                <p>{el.text}</p>
                <span>{el.price}</span>
              </MealsItemCont>
              <MealsItemContSecond>
                <MealsItemContSecondDiv>
                  <h3>{el.amount}</h3>
                  <Input />
                </MealsItemContSecondDiv>
                <div>
                  <Button />
                </div>
              </MealsItemContSecond>
            </MealsItem>
          );
        })}
      </ConstainerSecondMeals>
    </ContainerMeals>
  );
};
const ContainerMeals = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 100px;
`;
const ConstainerSecondMeals = styled.div`
  width: 1039px;
  height: 564px;
  background: #ffffff;
  border-radius: 16px;
`;
const MealsItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 28px 40px;
`;
const MealsItemCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    color: #222222;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
  }
`;
const MealsItemContSecond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 12px;
`
const MealsItemContSecondDiv = styled.div`
  display: flex;
  gap: 20px;
`;
