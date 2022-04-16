import ExpenseDate from './ExpenseDate'
import './index.css'

interface ExpenseItemProps {
  date: Date,
  title: string,
  amount: number,
}

function ExpenseItem({ date, title, amount }: ExpenseItemProps) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h3>{ title }</h3>
        <p className='expense-item__price'>{ amount }</p>
      </div>
    </div>
  )
}

export default ExpenseItem
