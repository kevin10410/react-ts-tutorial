import Card from '../Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from '../ExpenseFilter'
import './index.css'
import { useState } from 'react'

interface Expense {
  id: string,
  date: Date,
  title: string,
  amount: string,
}

interface ExpensesProps {
  items: Array<Expense>,
}

function Expenses({ items }: ExpensesProps) {
  const [year, setYear] = useState('2022')

  const filterChangedHandler = (year: string) => {
    setYear(year)
  }

  const filteredExpenses = items
    .filter(({ date }) => `${date.getFullYear()}` === year)

  const expensesContent = filteredExpenses.length === 0
    ? <p>No expense</p>
    : filteredExpenses.map(expense =>
        <ExpenseItem key={ expense.id } { ...expense }/>)

  return (
    <Card className='expenses'>
      <ExpensesFilter
        year={year}
        onFilterChange={filterChangedHandler}
      />
      { expensesContent }
    </Card>
  )
}

export default Expenses
