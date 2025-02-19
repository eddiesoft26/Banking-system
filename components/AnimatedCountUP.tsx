'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCountUP = ({amount}: {amount: number}) => {
  return (
    <span className='w-full'>
        <CountUp 
            decimals={2}
            prefix='$'
            duration={1.5}
            end={amount} 
        />
    </span>
  )
}

export default AnimatedCountUP