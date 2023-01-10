import React from 'react'
import styled from 'styled-components'

function Premium({globalState,setGlobalState}) {
  return (
    <>
      <div>
        <p>Lower Range</p>
        <Input type="number"/>
      </div>
      <div>
        <p>Upper Range</p>
        <Input type="number"/>
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