import React from 'react'
import { Bar, BarChart, Brush, CartesianGrid, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export const FifthBox = ({list}) => {

    const contList = list.slice(0, 100)

    const topicCountBySector = {}

    contList.forEach((item) => {
        const sector = item.sector
        const topic = item.topic

        if(!topicCountBySector[sector]) {
            topicCountBySector[sector] = {} 
        }

        if(!topicCountBySector[topic]) {
            topicCountBySector[topic] = {}
        }

        if(!topicCountBySector[sector][topic]) {
            topicCountBySector[sector][topic] = 1;
        }
        else {
            topicCountBySector[sector][topic]++;
        }
    })

    const chartData = []

    for(const sector in topicCountBySector) {
        const topicCounts = topicCountBySector[sector]
        for(const topic in topicCounts) {
            chartData.push({sector, topic, count: topicCounts[topic]})
        }
    }

    console.log("topic ->",chartData)
  return (
    <div>
        <div className="likelihood-impact-title">
            Likelihood v/s Impact
        </div>
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} 
                margin={{top: 10, bottom: 10, left: 10, right: 10}}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sector" />
                <YAxis  dataKey="count" />
                <Legend />
                <Tooltip />
                <ReferenceLine y={0} stroke="#000" />
                <Brush dataKey="sector" height={60} stroke="#8884d8" />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  )
}
