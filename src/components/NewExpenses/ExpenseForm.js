import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")
    const [enteredLocation, setEnteredLocation] = useState("")

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    //     enteredLocation: ""
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle:event.target.value};
        // })
    };

    const amountChangeHandler = (event) => {
            setEnteredAmount(event.target.value)
        // setUserInput({
        //         ...userInput,
        //         enteredAmount: event.target.value,
        //     })
    };

    const dateChangeHandler = (event) => {
            setEnteredDate(event.target.value)
            // setUserInput({
            //     ...userInput,
            //     enteredDate: event.target.value,
            // })
    }; 

    const locationChangeHandler = (event) => {
        setEnteredLocation(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredLocation: event.target.value,
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            date : enteredDate,
            amount : enteredAmount,
            location : enteredLocation
        };

        console.log(expenseData);
    }

    return (
        <form onClick={submitHandler}>
            <div className="new-expense__controls"> 
                <div className="new-expense__controls"> 
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/> 
                </div>
                <div className="new-expense__controls"> 
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/> 
                </div>
                <div className="new-expense__controls"> 
                    <label>Date</label>
                    <input type="date" min="2024-01-01" max="2028-01-01" onChange={dateChangeHandler}/> 
                </div>
                <div className="new-expense__controls"> 
                    <label>Location</label>
                    <input type="text" onChange={locationChangeHandler}/> 
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button> </div>
            </div>
        </form>
    );
};

export default ExpenseForm;