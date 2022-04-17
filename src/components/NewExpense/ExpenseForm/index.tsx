import React, { useState } from 'react'
import './index.css'

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    date: '',
    title: '',
    amount: '',
  })

  const dateChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setExpense(prevState => ({ ...prevState, date: value }))
  }

  const titleChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setExpense(prevState => ({ ...prevState, title: value }))
  }

  const amountChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    setExpense(prevState => ({ ...prevState, amount: value }))
  }

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'
            value={expense.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='1' step='1'
            value={expense.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date'
            value={expense.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm