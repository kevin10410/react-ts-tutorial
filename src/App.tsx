import { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

interface ExpenseInputData {
  title: string,
  amount: string,
  date: Date,
}

interface ExpenseData extends ExpenseInputData {
  id: string
}

function App() {
  const [expenses, setExpenses] = useState<Array<ExpenseData>>([])

  const addExpenseHandler = (inputData: ExpenseInputData) => {
    const expenseData = {
      ...inputData,
      id: Math.floor(Math.random() * Math.pow(10, 8)).toString()
    }
    setExpenses(prevState => ([...prevState, expenseData]))
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
