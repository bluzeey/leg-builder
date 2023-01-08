import React, { useState, useEffect, use } from "react";
import styled from "styled-components";
import Closest from "../StrikeTypes/Closest";
import Default from "../StrikeTypes/Default";
import Premium from "../StrikeTypes/Premium";
import Straddle from "../StrikeTypes/Straddle";
import Leg from "../Leg";

function Options() {
  const [strikeType, setStrikeType] = useState("Strike Type");
  const [strikeComponent, setStrikeComponent] = useState(null);

  const handleComponent = (strikeType) => {
    if (strikeType == "Strike Type") {
      setStrikeComponent(<Default />);
    } else if (strikeType == "Premium Range") {
      setStrikeComponent(<Premium />);
    } else if (strikeType == "Closest Premium") {
      setStrikeComponent(<Closest />);
    } else {
      setStrikeComponent(<Straddle />);
    }
  };
  useEffect(() => handleComponent(strikeType), [strikeType]);
  return (
    <OptionSegment>
      <div>
        <Title>Total Lot</Title>
        <TotalLots type="number" />
      </div>
      <div>
        <p>Position</p>
        <Select>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </Select>
      </div>
      <div>
        <p>Option Type</p>
        <Select>
          <option value="Buy">Call</option>
          <option value="Sell">Sell</option>
        </Select>
      </div>
      <div>
        <p>Expiry Type</p>
        <Select>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </Select>
      </div>
      <div>
        <p>Strike Selection Criteria</p>
        <Select onChange={(e) => setStrikeType(e.target.value)}>
          <option value="Strike Type">Strike Type</option>
          <option value="Premium Range">Premium Range</option>
          <option value="Closest Premium">Closest Premium</option>
          <option value="Straddle Width">Straddle Width</option>
        </Select>
      </div>
      {strikeComponent}
    </OptionSegment>
  );
}

const OptionSegment = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
`;

const TotalLots = styled.input`
  border-radius: 1rem;
  width: 5rem;
  border: 1px solid #f6f6f6;
  font-weight: 300;
  padding: 0.25rem;
`;
const Title = styled.p`
  font-weight: bold;
`;
const Select = styled.select`
  border: 1px solid #f6f6f6;
  border-radius: 1rem;
  padding: 0.25rem;
`;

export default Options;
