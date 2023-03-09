
import React,{ useState } from "react";
const IncDec = () =>{
     const [number, setNumber] = useState(0);

    const IncF =() =>{
        setNumber(number + 1);
    };
    const DecF = () =>{
        if(number > 0){
         setNumber(number - 1);
        }else{
            alert('Zero is the last number')
            setNumber(0);
        }
       
    };
    return (
      <div className="main_div">
        <div className="center_div">
          <h1>{number}</h1>
          <div className="btn_div">
           
             <button onClick={IncF}>Incre</button>
            <button onClick={DecF}>Decre</button> 
          </div>
        </div>
      </div>
    );
    
}
export default IncDec;