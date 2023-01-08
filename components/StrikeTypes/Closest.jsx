import React from 'react'
import styled from 'styled-components'

function Closest() {
  return (
    <>
    <div>
        <p>Premium</p>
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


export default Closest