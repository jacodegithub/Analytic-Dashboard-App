import React, { useEffect, useState } from 'react'
import './home.css'
import { FirstBox } from '../../component/dashboard-boxes/box1/FirstBox'
import { SecondBox } from '../../component/dashboard-boxes/box2/SecondBox'
import { getDataCsv } from '../../service/FetchData'
import { ThirdBox } from '../../component/dashboard-boxes/box3/ThirdBox'
import { FourthBox } from '../../component/dashboard-boxes/box4/FourthBox'
import { FifthBox } from '../../component/dashboard-boxes/box5/FifthBox'

export const Home = () => {

  const [list, setList] = useState([])

  useEffect(() => {

    getDataCsv().then(data => {
        console.log('this is the data', data)
        setList(data)
    }).catch(error => {
        console.log('this is the error', error)
    })

}, [])

  return (
    <div className='home'>
        <div className="box box1">
          <div className='top-box'>
            <FirstBox list={list} />
          </div>
        </div>
        <div className="box box2">
          <div className="scatter-chart">
            <SecondBox list={list} />
          </div>
        </div>
        <div className="box box3">
          <div className="bar-chart">
            <ThirdBox list={list} />
          </div>
        </div>
        <div className="box box4">
          <div className="pestle-bar-chart">
            <FourthBox list={list} />
          </div>
        </div>
        <div className="box box5">
          <div className="likelihood-and-impact">
            <FifthBox list={list} />
          </div>
        </div>
        <div className="box box6">Box6</div>
        <div className="box box7">Box7</div>
        <div className="box box8">Box8</div>
    </div>
  )
}
