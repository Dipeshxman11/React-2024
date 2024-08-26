import React, { useState } from 'react';

const  ExpenseDetails = (props) => {

  const [title, setTitle] = useState(props.title)
  const [amount, setAmount] = useState(props.amount)

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title)
  }

  const changeAmount = () => {
    setAmount('100$');
    console.log(title)
  }

    return (

        <div className="expense-item__description">
        <h2> {title} </h2>
        <div> Location : {props.location}</div>
        <div className="expense-item__price"> Rs {amount} </div>
        <button onClick={changeAmount}> Change Amount</button>

        <button onClick={clickHandler}> Change title</button>
      </div>

    )
}

export default ExpenseDetails;