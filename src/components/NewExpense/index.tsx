import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './index.css'

interface ExpenseInputData {
  title: string,
  amount: string,
  date: Date,
}

interface NewExpenseProps {
  onAddExpense: (expense: ExpenseInputData) => void,
}

const NewExpense = (props: NewExpenseProps) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseData = (inputData: ExpenseInputData) => {
    props.onAddExpense(inputData)
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const cancelEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      { !isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
      { isEditing && <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancelExpenseData={cancelEditingHandler}
        />
      }
    </div>
  )
}

export default NewExpense
