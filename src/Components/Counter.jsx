import React from "react";

function Counter() {
    let [count,setcount] = React.useState(5)
    const [disabled, setDisabled] = React.useState(false);
  
    const inc = (val)=>{
      setcount ( count +val)
      if(count>-1){
  
        setDisabled(false)
  
      }
      console.log("inc")
    }
  
    const dec =()=>{
      if(count >0){
        setcount(count-1)
      }
  
      if(count===1){
  
        setDisabled(true)
  
      }
      console.log("dec")
    }
    return (
      <div className="App">
        <h1>counter</h1>
        <h2>{count}</h2>
        <button onClick={()=>inc(1)}>add</button>
        <button disabled={disabled}  onClick={dec}>reduce</button>
      </div>
    );
  }

  export default Counter;