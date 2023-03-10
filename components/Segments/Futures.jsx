import React from 'react'
import styled from 'styled-components'

function Futures({globalState,setGlobalState}) {
  return (
    <FutureSegment>
    <div>
      <Title>Total Lot</Title>
      <TotalLots type="number"  value={globalState?.Lots} onChange={(e)=>setGlobalState({...globalState,Lots:e.target.value})}/>
    </div>
    <div>
      <p>Position</p>
      <Select onChange={(e)=>setGlobalState({...globalState,PositionType:e.target.value})}>
        <option value="Buy">Buy</option>
        <option value="Sell">Sell</option>
      </Select>
    </div>
  </FutureSegment>
  )
}

const FutureSegment=styled.div`
    display: flex;
    justify-content: center;
    gap:1.25rem;
`
const TotalLots=styled.input`
    border-radius: 1rem;
    width:5rem;
    border: 1px solid #f6f6f6;
    font-weight: 300;
    padding:0.25rem
`
const Title=styled.p`
    font-weight: bold;
`
const Select=styled.select`
    border: 1px solid #f6f6f6;
    border-radius: 1rem;
    padding: 0.25rem;
`

export default Futures