import React from "react";
import { Meals } from "../components/meals/Meals";
export const product = [
  {
    title: "Sushi",
    text: "Finest fish and veggies",
    price: "$22.99",
    amount: "Amount",
  },
  {
    title: "Schnitzel",
    text: "A german specialty!",
    price: "$16.00",
    amount: "Amount",
  },
  {
    title: "Barbecue Burger",
    text: "American, raw, meaty",
    price: "$12.99",
    amount: "Amount",
  },
  {
    title: "Green Bowl",
    text: "Healthy...and green...",
    price: "$19.99",
    amount: "Amount",
  },
];
export const Products = () => {
  return (
    <div>
      <Meals product={product} />
    </div>
  );
};
