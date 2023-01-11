import React, { useState } from "react";
import styled from "styled-components";

function TrailSL({ data, setData }) {
  const [trailSLChecked, setTrailSLChecked] = useState(false);
  return (
    <div>
      <p>
        <input
          type="checkbox"
          checked={trailSLChecked}
          onChange={() => setTrailSLChecked(!trailSLChecked)}
        />{" "}
        Trail SL
      </p>
      <div>
        <Select value={data?.LegTrailSLType} onChange={(e) =>
            setData({ ...data, LegTrailSLType: e.target.value })
          } disabled={!trailSLChecked}>
          <option value="Points">Points</option>
          <option value="Percentage">Percentage</option>
        </Select>
        <Input
          value={data?.LegTrailSLInstrumentMove}
          onChange={(e) =>
            setData({ ...data, LegTrailSLInstrumentMove: e.target.value })
          }
          type="number"
          disabled={!trailSLChecked}
        />
        <Input
          value={data?.LegTrailSLStopLossMove}
          onChange={(e) =>
            setData({ ...data, LegTrailSLStopLossMove: e.target.value })
          }
          type="number"
          disabled={!trailSLChecked}
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

export default TrailSL;
