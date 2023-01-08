import React from "react";
import styled from "styled-components";

function Default() {
  const strikeTypes = [
    "ITM10",
    "ITM9",
    "ITM8",
    "ITM7",
    "ITM6",
    "ITM5",
    "ITM4",
    "ITM3",
    "ITM2",
    "ITM1",
    "ATM",
    "OTM1",
    "OTM2",
    "OTM3",
    "OTM4",
    "OTM5",
    "OTM6",
    "OTM7",
    "OTM8",
    "OTM9",
    "OTM10",
  ];

  return (
    <div>
    <p>Strike Type</p>
      <Select>
        {strikeTypes.map(strike=>
            <option value={strike}>{strike}</option>)}
      </Select>
    </div>
  );
}

const Select = styled.select`
  border: 1px solid #f6f6f6;
  border-radius: 1rem;
  padding: 0.25rem;
`;

export default Default;
