import Expenses from './components/Expenses';

function App() {
  const items = [
    { id: '1', date: new Date(), title: '1', amount: 200 },
    { id: '2', date: new Date(), title: '2', amount: 200 },
    { id: '3', date: new Date(), title: '3', amount: 200 },
    { id: '4', date: new Date(), title: '4', amount: 200 },
  ]

  return (
    <div>
      <Expenses items={items}/>
    </div>
  );
}

export default App;
