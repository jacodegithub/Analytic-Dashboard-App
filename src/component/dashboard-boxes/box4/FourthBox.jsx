import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const FourthBox = ({list}) => {

    const pestleCounts = {
        Political: 0,
        Economical: 0,
        Social: 0,
        Technological: 0,
        Legal: 0,
        Environmental: 0
    }

    const contList = list.slice(0, 500);

    contList.forEach(item => {
        const pestle = item.pestle || "other";
        pestleCounts[pestle] = (pestleCounts[pestle] || 0) + 1;
    })

    const pestleData = Object.keys(pestleCounts).map(pestle => ({
        pestle,
        count: pestleCounts[pestle]
    }))

    // console.log("pestle-data -",pestleData)

  return (
    <div>
        <div className="pestle-analysis">
            Pestle Analysis
        </div>
        <ResponsiveContainer width="100%" height={400} >
            <LineChart data={pestleData} 
                    margin={{top: 20, bottom: 20, left: 20, right: 20}}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="pestle" />
                <YAxis dataKey="count" />
                <Tooltip />
                <Line type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
