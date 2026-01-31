import React from 'react'
import WeighDescrip from '../components/WeighDescrip'
import Guidance from '../components/Guidance'
import WeightLossFoods from '../components/WeightLossFoods'
import Sample from '../components/Sample'
import Success from '../components/Success'

const WeightLoss = () => {
  return (
    <div className=' '>
        <WeighDescrip/>
        <Guidance/>
        <WeightLossFoods/>
        <Sample/>
        <Success/>
    </div>
  )
}

export default WeightLoss