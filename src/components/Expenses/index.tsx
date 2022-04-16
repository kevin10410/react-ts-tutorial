import ExpenseItem from './ExpenseItem'
import './index.css'

interface Expense {
  id: string,
  date: Date,
  title: string,
  amount: number,
}

interface ExpensesProps {
  items: Array<Expense>,
}

function Expenses({ items }: ExpensesProps) {
  return (
    <div className='expenses'>
      {
        items.map(item =>
          <ExpenseItem
            key={ item.id }
            { ...item }
          />
        )
      }
    </div>
  )
}

export default Expenses
