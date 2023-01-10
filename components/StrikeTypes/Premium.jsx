import React from 'react'
import styled from 'styled-components'

function Premium({globalState,setGlobalState}) {
  return (
    <>
      <div>
        <p>Lower Range</p>
        <Input value={globalState.LowerRange} onChange={(e)=>setGlobalState({...globalState,LowerRange:e.target.value})} type="number"/>
      </div>
      <div>
        <p>Upper Range</p>
        <Input value={globalState.UpperRange} onChange={(e)=>setGlobalState({...globalState,UpperRange:e.target.value})} type="number"/>
      </div>
    </>
  )
}

const Input = styled.input`
  border: 1px solid #f6f6f6;
  border-radius: 1rem;
  padding: 0.25rem;
`;



export default Premium