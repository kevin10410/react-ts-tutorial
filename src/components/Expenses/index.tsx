import Card from '../Card'
import ExpenseList from './ExpenseList'
import ExpenseChart from './ExpenseChart'
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
  expenses: Array<Expense>,
}

function Expenses({ expenses }: ExpensesProps) {
  const [year, setYear] = useState('2022')

  const filterChangedHandler = (year: string) => {
    setYear(year)
  }

  const filteredExpenses = expenses
    .filter(({ date }) => `${date.getFullYear()}` === year)

  return (
    <Card className='expenses'>
      <ExpensesFilter
        year={year}
        onFilterChange={filterChangedHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses
