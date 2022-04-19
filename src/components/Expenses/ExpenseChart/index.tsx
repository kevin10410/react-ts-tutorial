import Chart from "../../Chart";

interface Expense {
  id: string,
  date: Date,
  title: string,
  amount: string,
}

interface ExpenseChartProps {
  expenses: Array<Expense>,
}

const ExpenseChart = ({ expenses }: ExpenseChartProps) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]

  expenses.forEach(expense => {
    const monthIndex = expense.date.getMonth()
    chartDataPoints[monthIndex].value += parseInt(expense.amount, 10)
  })

  return (
    <Chart dataPoints={chartDataPoints}/>
  )
};

export default ExpenseChart
