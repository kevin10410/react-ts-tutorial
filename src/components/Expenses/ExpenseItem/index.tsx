import Card from '../../Card'
import ExpenseDate from '../ExpenseDate'
import './index.css'

interface ExpenseItemProps {
  id: string,
  date: Date,
  title: string,
  amount: string,
}

function ExpenseItem({ date, title, amount }: ExpenseItemProps) {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h3>{ title }</h3>
          <p className='expense-item__price'>{ amount }</p>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem
