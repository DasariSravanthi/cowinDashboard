// Write your code here
import './index.css'

import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = props => {
  const {vaccinationCoverageData} = props

  const DataFormatter = number => `${(number * 50).toString()}k`

  return (
    <div className="chart-background">
      <h1 className="chart-heading">Vaccination Coverage</h1>
      <BarChart
        width={1000}
        height={500}
        data={vaccinationCoverageData}
        margin={{top: 15}}
      >
        <XAxis
          dataKey="vaccine_date"
          tick={{stroke: '#6c757d', strokeWidth: 1}}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{stroke: '#6c757d', strokeWidth: 0}}
        />
        <Legend wrapperStyle={{padding: 20}} />
        <Bar
          dataKey="dose_1"
          name="Dose 1"
          fill="#5a8dee"
          barSize="10%"
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="dose_2"
          name="Dose 2"
          fill="#f54394"
          barSize="10%"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
