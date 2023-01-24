import React , {useRef,useState} from "react";
import styled from "styled-components";
import Futures from "./Segments/Futures";
import Options from "./Segments/Options";

function LegBuilder({ legs, setLegs, globalState, setGlobalState }) {
  const [instrument,setInstrument]=useState('future')
  return (
    <>
      <Segments>
        <p>Select Segments</p>
        <div>
          <SegmentButton
            instrument={instrument}
            onClick={() =>{
              setInstrument('future')
            }}
          >
            Futures
          </SegmentButton>
          <AlternateButton
            instrument={instrument}
            reverse={true}
            onClick={() =>{
              setInstrument('options')
            }}
          >
            Options
          </AlternateButton>
        </div>
      </Segments>
        {instrument === "future" ? (
          <Futures globalState={globalState} setGlobalState={setGlobalState} />
        ) : (
          <Options globalState={globalState} setGlobalState={setGlobalState} />
        )}
        <ButtonSection>
          <AddLeg onClick={()=>setLegs([
            ...legs,globalState
          ])}>Add Leg</AddLeg>
          <Cancel>Cancel</Cancel>
        </ButtonSection>
    </>
  );
}

const Segments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    margin-right: 5px;
  }
`;

const SegmentButton = styled.button`
  background-color: ${prop => prop.instrument==='future' ? '#375a9e' : 'white'};
  color:${prop => prop.instrument ==='future' ? 'white ' : 'black'};
  border: 1px solid #f6f6f6;
  border-radius:${prop => prop.reverse ? '0px 16px 16px 0px ' : '16px 0px 0px 16px'};
  padding: 0.45rem;
`;

const AlternateButton=styled(SegmentButton)`
    background-color: ${prop => prop.instrument==='options' ? '#375a9e' : 'white'};
  color:${prop => prop.instrument ==='options' ? 'white ' : 'black'};
`


const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem;
`;

const AddLeg = styled.button`
  background-color: #375a9e;
  color: white;
  border: 1px solid #375a9e;
  border-radius: 16px;
  padding: 0.45rem 1rem;
  cursor: pointer;
`;

const Cancel = styled.button`
  color: black;
  background-color: white;
  border: 1px solid white;
  border-radius: 16px;
  padding: 0.45rem 1rem;
  cursor: pointer;
`;

export default LegBuilder;
