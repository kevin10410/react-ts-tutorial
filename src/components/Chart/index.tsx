import ChartBar from './ChartBar'
import './index.css'

interface DataPoint {
  value: number,
  label: string,
}

interface ChartProps {
  dataPoints: Array<DataPoint>
}

const Chart = ({ dataPoints }: ChartProps) => {
  const values = dataPoints.map(({ value }) => value)
  const maxValue = Math.max(...values)

  return (
    <div className='chart'>
      {
        dataPoints.map(({ value, label }) => 
          <ChartBar
            key={label}
            value={value}
            label={label}
            maxValue={maxValue}
          />
        )
      }
    </div>
  )
}

export default Chart
