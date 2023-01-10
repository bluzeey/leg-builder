import React,{useState , useEffect} from "react";
import styled from "styled-components";
import Momentum from "./LegFeatures/Momentum";
import TrailSL from "./LegFeatures/TrailSL";
import Futures from "./Segments/Futures";
import Options from "./Segments/Options";

function Leg({ item ,index , legs, setLegs}) {
  const [data,setData]=useState(item)
  

  useEffect(()=>{
    if(legs && index && data){
      const newArray=legs
      newArray[index]=data
      setLegs([...newArray])
    }
  },[data])

  const removeValue=(index)=>{
    let newArray=legs
    newArray= newArray.slice(0,index).concat(newArray.slice(index+1))
    setLegs([...newArray])
  }
  const copyValue=(data)=>{
    let newArray=[...legs,data]
    setLegs(newArray)
  }

  return (
    <LegContainer>
      <CopyDeleteContainer>
        <img src='./close.svg' onClick={()=>removeValue(index)}/>
        <img src='./copy.svg' onClick={()=>copyValue(data)}/>
      </CopyDeleteContainer>
      <div>
        {item.instrument==='future' ? <Futures globalState={data} setGlobalState={setData}/> : <Options  globalState={data} setGlobalState={setData}/>}
      </div>
      <Effects>
         <Momentum data={data} setData={setData}/>
         <TrailSL data={data} setData={setData}/>
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
