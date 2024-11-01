import React from 'react'
import './Wrapper.css'
import Card from '../Card/Card'
const Wrapper = () => {
  return (
   <>
   <div className="wrapper">
    <Card title="DOTA 2" text="5x5 TURBO"  num="1"/>
    <Card title="DOTA 3" text="1x1 SOLO MID" num="2"/>
    <Card title="CS:GO" text="SOON" num="3"/>
   </div>
   </>
  )
}

export default Wrapper