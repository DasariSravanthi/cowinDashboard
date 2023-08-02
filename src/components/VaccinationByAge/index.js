// Write your code here
import './index.css'

import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAgeData} = props

  return (
    <div className="chart-background">
      <h1 className="chart-heading">Vaccination by age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByAgeData}
          startAngle={0}
          endAngle={360}
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
