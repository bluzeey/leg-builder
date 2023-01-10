import React from "react";
import styled from "styled-components";

function Straddle({ globalState, setGlobalState }) {
  return (
    <p>
      [ATM Strike
      <Select
        value={globalState.Adjustment}
        onChange={(e) =>
          setGlobalState({ ...globalState, Adjustment: e.target.value })
        }
      >
        <option value="Buy">+</option>
        <option value="Sell">-</option>
      </Select>
      (
      <input
        type="number"
        value={globalState.Multiplier}
        onChange={(e) =>
          setGlobalState({ ...globalState, Multiplier: e.target.value })
        }
      />{" "}
      X ATM Straddle Price )]
    </p>
  );
}

const Select = styled.select`
  border: 1px solid #f6f6f6;
  border-radius: 1rem;
  padding: 0.25rem;
`;

export default Straddle;
