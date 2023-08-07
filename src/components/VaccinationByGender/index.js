// Write your code here
import './index.css'

import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = props => {
  const {vaccinationByGenderData} = props

  return (
    <div className="chart-background">
      <h1 className="chart-heading">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByGenderData}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          align="center"
          wrapperStyle={
            ({margin: {top: 20, right: 20, bottom: 20, left: 20}},
            {borderColor: '#ffffff'})
          }
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
