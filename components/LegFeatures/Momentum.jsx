import React, { useState } from "react";
import styled from "styled-components";


function Momentum({ data, setData }) {
  const [momentumChecked, setMomentumChecked] = useState(false);
  return (
    <div>
      <p>
        <input
          type="checkbox"
          checked={momentumChecked}
          onChange={() => setMomentumChecked(!momentumChecked)}
        />{" "}
        Simple Momentum
      </p>
      <div>
        <Select
          value={data.LegMomentumType}
          onChange={(e) =>
            setData({ ...data, LegMomentumType: e.target.value })
          }
          disabled={!momentumChecked}
        >
          <option value="Percentage↑">Percentage↑</option>
          <option value="Percentage↓">Percentage↓</option>
          <option value="Points↑">Points↑</option>
          <option value="Points↓">Points↓</option>
          <option value="Underlying Percentage↑">Underlying Percentage↑</option>
          <option value="Underlying Percentage↓">Underlying Percentage↓</option>
          <option value="Underlying Points↑">Underlying Points↑</option>
          <option value="Underlying Points↓">Underlying Points↓</option>
        </Select>
        <Input
          value={data.LegMomentumValue}
          onChange={(e) =>
            setData({ ...data, LegMomentumValue: e.target.value })
          }
          disabled={!momentumChecked}
          type="number"
        />
      </div>
    </div>
  );
}

const Select = styled.select`
  background-color: #375a9e;
  color: white;
  border: 1px solid #375a9e;
  border-radius: 16px;
  padding:0.2rem 0.5rem;
`;

const Input = styled.input`
  color: black;
  background-color: white;
  border: 1px solid white;
  border-radius: 16px;
  width: 5rem;
  margin: 0 1rem;
  padding:0.2rem 0.5rem;
`;

export default Momentum;
