import ExpenseItem from "./components/ExpenseItem";

function App() {
  const items = [
    { id: '1', date: new Date(), title: '1', amount: 200 },
    { id: '2', date: new Date(), title: '2', amount: 200 },
    { id: '3', date: new Date(), title: '3', amount: 200 },
    { id: '4', date: new Date(), title: '4', amount: 200 },
  ]

  return (
    <div>
      {
        items.map(item =>
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        )
      }
    </div>
  );
}

export default App;
