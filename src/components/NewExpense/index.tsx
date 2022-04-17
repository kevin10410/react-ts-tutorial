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
  const saveExpenseData = (inputData: ExpenseInputData) => {
    props.onAddExpense(inputData)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>
  )
}

export default NewExpense
