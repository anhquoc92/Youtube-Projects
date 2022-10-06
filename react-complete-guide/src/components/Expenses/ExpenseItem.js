import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";
import { useState } from "react";

const ExpenseItem = (props) => {
  // document.getElementById('root').addEventListener()
  const [title, setTitle] = useState(props.title);
  const clickHander = () => {
    setTitle("Updated!!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHander}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem; //lession 47 5:00
