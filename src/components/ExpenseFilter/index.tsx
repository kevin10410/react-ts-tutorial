import './index.css';

interface ExpenseFilterProps {
  year: string,
  onFilterChange: (year: string) => void,
}

const ExpensesFilter = (props: ExpenseFilterProps) => {

  const updateFilter = (event: React.FormEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    props.onFilterChange(value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.year} onChange={updateFilter}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;