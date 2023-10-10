
import './ExpenseForm.css'

import React, {useState} from 'react'

const ExpenseForm = (props) => {
  const[enteredTitle, setEnteredTitle] =useState('');
  const[enteredAmount, setEnteredAmount] =useState('');
  const[enteredDate, setEnteredDate] =useState('');

  const titleChangeHandler=(event)=>{
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler=(event)=>{
    setEnteredAmount(event.target.value);
  }
  const datChangeHandler=(event)=>{
    setEnteredDate(event.target.value)
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
      title: enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate),
      id:Math.random().toString()

    }
    props.onSaveExpenseData();
    console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');



  }
  return (
    <form onSubmit={submitHandler}>
    <div className="new-expense_controls">
    <div className="new-expense_control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
    </div>
    <div className="new-expense_control">
        <label>Amount</label>
        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense_control">
        <label>Date</label>
        <input type="date" value={enteredDate} onChange={datChangeHandler} />
    </div>
    </div>
    <div className="new-expense_actions">
        <button type="submit">Add Expense</button>
    </div>
    </form>
  )
}

export default ExpenseForm
