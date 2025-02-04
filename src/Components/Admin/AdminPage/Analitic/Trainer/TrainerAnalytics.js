import React from 'react'
import MonthTwo from './MonthTwo'
import MonthOne from './MonthOne'

function Trainer() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around'

    }}>
      <MonthOne/>
      <MonthTwo/>

    </div>
  )
}

export default Trainer
