import React from 'react'
import styled from 'styled-components'

function Closest({globalState,setGlobalState}) {
  return (
    <>
    <div>
        <p>Premium</p>
        <Input value={globalState.PremiumRange} onChange={(e)=>setGlobalState({...globalState,PremiumRange:e.target.value})} type="number" defaultValue={1} />
    </div>
    </>
  )
}

const Input = styled.input`
  border: 1px solid #f6f6f6;
  border-radius: 1rem;
  padding: 0.25rem;
`;


export default Closest