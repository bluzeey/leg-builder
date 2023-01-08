import React from 'react'
import styled from 'styled-components'

function Straddle() {
  return (
    <p>[ATM Strike
        <Select>
          <option value="Buy">+</option>
          <option value="Sell">-</option>
        </Select>(
            <input type="number"/> X ATM Straddle Price
        )]</p>
  )
}

const Select=styled.select`
    border: 1px solid #f6f6f6;
    border-radius: 1rem;
    padding: 0.25rem;
`


export default Straddle