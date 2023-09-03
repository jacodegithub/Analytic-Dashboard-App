import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

export const FirstBox = ({list}) => {

    const contList = list.slice(0, 50)

    const endYearIntensityData = contList.map(list => ({
        year: list.start_year,
        intensity: list.intensity
    }))
    // console.log('this ->', endYearIntensityData)
    
  return (
    <div className='topbox'>
        <h3>Intensity Of Sectors</h3>
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={endYearIntensityData}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="year" label={{ value: "End Year", position: "insideBottom", offset: -5 }} />
                <YAxis label={{ value: "Intensity", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Area type="monotone" dataKey="intensity" stroke="#8884f8" name="Intensity" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}
