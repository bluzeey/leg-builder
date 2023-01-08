import React, { useState } from "react";
import styled from "styled-components";

function LegBuilder() {
  const [futures, setFutures] = useState(true);

  const showFutures = () => {
    setFutures(true);
  };
  const closeFutures = () => {
    setFutures(false);
  };
  console.log(futures);
  return (
    <Container>
      <Segments>
        <p>Select Segments</p>
        <div>
          <SegmentButton futures={futures} onClick={showFutures}>
            Futures
          </SegmentButton>
          <AlternateSegmentButton futures={futures} onClick={closeFutures}>
            Options
          </AlternateSegmentButton>
        </div>
      </Segments>
        <FutureSegment>
          <div>
            <p>Total Lot</p>
            <input type="number" />
          </div>
          <div>
            <p>Position</p>
            <select>
              <option value="Buy">Buy</option>
              <option value="Sell">Sell</option>
            </select>
          </div>
        </FutureSegment>]
        
        

    </Container>
  );
}

const Container = styled.div`
  background-color: #f6f6f6;
`;

const Segments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    margin-right: 5px;
  }
`;


const SegmentButton = styled.button`
  background-color: ${(props) => (props.futures ? "#375a9e" : "white")};
  color: ${(props) => (props.futures ? "white" : "black")};
  border: 1px solid #f6f6f6;
  border-radius: 16px 0px 0px 16px;
  padding: 0.45rem;
`;

const AlternateSegmentButton = styled.button`
  background-color: ${(props) => (props.futures ? "white" : "#375a9e")};
  color: ${(props) => (props.futures ? "black" : "white")};
  border: 1px solid #f6f6f6;
  border-radius: 0px 16px 16px 0px;
  padding: 0.45rem;
`;

const FutureSegment=styled.div`
    display: flex;
    justify-content: center;
`
const OptionSegment=styled.div`
    display: flex;
    justify-content: center;

`

export default LegBuilder;
