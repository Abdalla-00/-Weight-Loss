import React from 'react'
import { sample } from '../data/weightLossTips'

const Sample = () => {
  return (
    <div className='bg-gray-100 h-96 mt-20 '>
        <div className='text-center p-3'>
            <h1 className='font-semibold text-2xl'>Sample Meal Plan</h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3'>
            {sample.map((product,index)=>{
              return(
                <div key={index} >
                    <h1>{product.title}</h1>
                    <p>{product.desc1}</p>
                    <p>{product.desc2}</p>
                    <p>{product.desc3}</p>
                    <p>{}</p>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Sample