import React,{useState} from "react";
import styled from "styled-components";
import Futures from "./Segments/Futures";
import Options from "./Segments/Options";

function Leg({ item ,index}) {
  const [data,setData]=useState(item)
  return (
    <LegContainer>
      <CopyDeleteContainer>
        <img src='./close.svg'/>
        <img src='./copy.svg'/>
      </CopyDeleteContainer>
      <div>
        {item.instrument==='future' ? <Futures globalState={data} setGlobalState={setData}/> : <Options  globalState={data} setGlobalState={setData}/>}
      </div>
      <Effects>
        <div>
          <p>
            <input type="checkbox" /> Simple Momentum
          </p>
          <div>
            <Select>
              <option value="Percentage↑">Percentage↑</option>
            </Select>
            <Input type="number" />
          </div>
        </div>
        <div>
          <p>
            <input type="checkbox" /> Trail SL
          </p>
          <div>
            <Select>
              <option value="Points">Points</option>
              <option value="Percentage">Percentage</option>
            </Select>
            <Input type="number" />
            <Input type="number" />
          </div>
        </div>
      </Effects>
    </LegContainer>
  );
}

const LegContainer = styled.div`
  background-color: #efefef;
  border: 1px solid #efefef;
  border-radius: 12px;
  margin:1rem;
`;

const CopyDeleteContainer=styled.div`
  display:flex;
  flex-direction: column;
  float: right;
  margin-right: -1rem;
  >img{
    padding:0.25rem;
  }
`

const Effects=styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`

const Select = styled.select`
  background-color: #375a9e;
  color: white;
  border: 1px solid #375a9e;
  border-radius: 16px;
  
`;

const Input = styled.input`
  color: black;
  background-color: white;
  border: 1px solid white;
  border-radius: 16px;
  width: 5rem;
  margin:0 1rem;
`;


export default Leg;
