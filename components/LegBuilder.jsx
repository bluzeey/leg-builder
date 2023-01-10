import React from "react";
import styled from "styled-components";
import Futures from "./Segments/Futures";
import Options from "./Segments/Options";

function LegBuilder({ legs, setLegs, globalState, setGlobalState }) {
  return (
    <>
      <Segments>
        <p>Select Segments</p>
        <div>
          <SegmentButton
            type={globalState.instrument}
            onClick={() =>
              setGlobalState({ ...globalState, instrument: "future" })
            }
          >
            Futures
          </SegmentButton>
          <AlternateSegmentButton
            type={globalState.instrument}
            onClick={() =>
              setGlobalState({ ...globalState, instrument: "options" })
            }
          >
            Options
          </AlternateSegmentButton>
        </div>
      </Segments>
        {globalState.instrument === "future" ? (
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
  background-color: ${(props) =>
    props.type === "future" ? "#375a9e" : "white"};
  color: ${(props) => (props.type === "future" ? "white" : "black")};
  border: 1px solid #f6f6f6;
  border-radius: 16px 0px 0px 16px;
  padding: 0.45rem;
`;

const AlternateSegmentButton = styled.button`
  background-color: ${(props) =>
    props.type === "future" ? "white" : "#375a9e"};
  color: ${(props) => (props.type === "future" ? "black" : "white")};
  border: 1px solid #f6f6f6;
  border-radius: 0px 16px 16px 0px;
  padding: 0.45rem;
`;

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
  padding: 0.45rem;
`;

const Cancel = styled.button`
  color: black;
  background-color: white;
  border: 1px solid white;
  border-radius: 16px;
  padding: 0.45rem;
`;

export default LegBuilder;
