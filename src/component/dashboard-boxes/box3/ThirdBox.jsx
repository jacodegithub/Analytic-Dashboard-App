import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export const ThirdBox = ({list}) => {

    const contList = list.slice(0, 100);

    const countryCounts = {};
    contList.forEach(item => {
        const country = item.country;
        if(country !== "") {
            countryCounts[country] = (countryCounts[country] || 0) + 1;
        }
    })
    console.log(countryCounts)
    // Convert cityCounts into an array of objects for Recharts
    const countryData = Object.keys(countryCounts).map(country => ({
        country,
        count: countryCounts[country]
    }))
    console.log('countrydata -> ', countryData)
  return (
    <div>
        <h2>Insights Distribution by Country</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={countryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="country" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
    </div>
  )
}
