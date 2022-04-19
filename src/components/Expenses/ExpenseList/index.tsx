import ExpenseItem from '../ExpenseItem'
import './index.css'

interface Expense {
  id: string,
  date: Date,
  title: string,
  amount: string,
}

interface ExpenseListProps {
  expenses: Array<Expense>,
}

const ExpenseList = ({ expenses }: ExpenseListProps) => {

  if (expenses.length === 0) {
    return <h2 className='expense-list__fallback'>No Expense!</h2>
  }
  
  return (
    <ul className='expense-list'>
      { expenses.map(expense =>
          <ExpenseItem
            key={ expense.id }
            { ...expense }
          />)
      }
    </ul>
  )
}

export default ExpenseList
