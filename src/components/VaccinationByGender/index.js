// Write your code here
import './index.css'

import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const vaccinationByGenderData = props

  return (
    <div className="chart-background">
      <h1 className="chart-heading">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByGenderData}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
