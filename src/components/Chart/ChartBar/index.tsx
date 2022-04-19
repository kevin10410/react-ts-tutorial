import './index.css'

interface ChartBarProps {
  label: string,
  value: number,
  maxValue: number,
}

const ChartBar = ({ label, value, maxValue }: ChartBarProps) => {
  const barFillHeight = `${Math.round((value / maxValue) * 100)}%`
  console.log(label, value, maxValue, barFillHeight)

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  )
}

export default ChartBar