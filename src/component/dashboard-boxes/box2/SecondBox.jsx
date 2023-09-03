import { ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts'

export const SecondBox = ({list}) => {

    const contList = list.slice(0, 100)

    const RelevenceData = contList.map(list => ({
        relevance: list.relevance,
        intensity: list.intensity,
        likelihood: list.likelihood
    }))

    // console.log('relevence -> ', RelevenceData)

  return (
    <div>        
        <div className="insight-rist-data">Relevance, Intensity & Likelihood of Insight</div>
        <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{top: 30, bottom: 10, left: 10, right: 10}} >
                <XAxis dataKey="relevance" type="number"  name="Relevence" label={{value: "Relevance", position: "insideBottom", offset: -5}}/>
                <YAxis dataKey="intensity" type="number" name="Intensity" label={{value: "Intensity", angle: -90, position: "insideLeft"}}/>
                <ZAxis dataKey="likelihood" type="number" range={[50, 100]} name="Likelihood" />
                <Tooltip cursor={{strokeDasharray: '3 3'}} />
                <Scatter data={RelevenceData} fill="#8884d8" shape="circle" />
            </ScatterChart>
        </ResponsiveContainer>
    </div>
  )
}
