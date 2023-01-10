import React from 'react'
import styled from 'styled-components'
import Leg from './Leg'

function Legs({legs,setLegs}) {
  return (
    <LegContainer>
      {legs?.map((item,index)=>
      <>
        <Leg key={index} item={item} index={index} setLegs={setLegs}/>
      </>)}
    </LegContainer>
  )
}

const LegContainer=styled.div`
  padding:1rem
`

export default Legs