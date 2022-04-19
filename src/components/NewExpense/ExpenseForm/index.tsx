import React, { useState } from 'react'
import './index.css'

interface ExpenseInputData {
  title: string,
  amount: string,
  date: Date,
}

interface ExpenseFormProps {
  onSaveExpenseData: (data: ExpenseInputData) => void,
  onCancelExpenseData: () => void,
}

const ExpenseForm = (props: ExpenseFormProps) => {
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

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const expenseData = {
      ...expense,
      date: new Date(expense.date)
    }

    props.onSaveExpenseData(expenseData)
    setExpense({ date: '', title: '', amount: '' })
  }

  const cancelHandler = () => {
    props.onCancelExpenseData()
    setExpense({ date: '', title: '', amount: '' })
  }

  return (
    <form onSubmit={submitHandler}>
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
        <button type='button' onClick={cancelHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm