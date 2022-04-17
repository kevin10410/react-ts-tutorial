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

  return (
    <Card className='expenses'>
      <ExpensesFilter
        year={year}
        onFilterChange={filterChangedHandler}
      />
      {
        items.map(item =>
          <ExpenseItem
            key={ item.id }
            { ...item }
          />
        )
      }
    </Card>
  )
}

export default Expenses
