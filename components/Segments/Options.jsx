import React, { useState, useEffect} from "react";
import styled from "styled-components";
import Closest from "../StrikeTypes/Closest";
import Default from "../StrikeTypes/Default";
import Premium from "../StrikeTypes/Premium";
import Straddle from "../StrikeTypes/Straddle";

function Options({globalState,setGlobalState}) {
  const [strikeComponent, setStrikeComponent] = useState(null);

  const handleComponent = (globalState,setGlobalState) => {
  if (globalState?.EntryType == "Strike Type") {
      setStrikeComponent(<Default globalState={globalState} setGlobalState={setGlobalState} />);
    } else if (globalState?.EntryType == "Premium Range") {
      setStrikeComponent(<Premium globalState={globalState} setGlobalState={setGlobalState} />);
    } else if (globalState?.EntryType == "Closest Premium") {
      setStrikeComponent(<Closest globalState={globalState} setGlobalState={setGlobalState} />);
    } else {
      setStrikeComponent(<Straddle globalState={globalState} setGlobalState={setGlobalState} />);
    }
  };
  useEffect(() => handleComponent(globalState,setGlobalState), [globalState?.EntryType]);
  return (
    <OptionSegment>
      <div>
        <Title>Total Lot</Title>
        <TotalLots type="number" defaultValue={1} value={globalState?.Lots} onChange={(e)=>setGlobalState({...globalState,Lots:e.target.value})}/>
      </div>
      <div>
        <p>Position</p>
        <Select value={globalState.PositionType} onChange={(e) => setGlobalState({...globalState,PositionType:e.target.value})}>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </Select>
      </div>
      <div>
        <p>Option Type</p>
        <Select value={globalState.optionType}  onChange={(e) => setGlobalState({...globalState,optionType:e.target.value})}>
          <option value="Buy">Call</option>
          <option value="Sell">Sell</option>
        </Select>
      </div>
      <div>
        <p>Expiry Type</p>
        <Select value={globalState.ExpiryKind} onChange={(e) => setGlobalState({...globalState,ExpiryKind:e.target.value})}>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </Select>
      </div>
      <div>
        <p>Strike Selection Criteria</p>
        <Select value={globalState.EntryType} onChange={(e) => setGlobalState({...globalState,EntryType:e.target.value})}>
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
