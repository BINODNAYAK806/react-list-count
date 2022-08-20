import React from 'react'
import List from './List';

export default function Task() {
const[query,setQuery] = React.useState("");
const [tasks,setTask] = React.useState([]);
const[tc,setTc] = React.useState(1)

const handleChange = (e)=>{

const {value}= e.target;
setQuery(value)

};

const handleAdd =()=>{

  if(query!==""){
      const paylode ={

        title: query,
        status : false

    };
    let newTask = [...tasks,paylode];
    setTask(newTask)
    setQuery("")
    setTc(tc+1)
}
};

console.log(tasks)

  return (
    <div>
       <h1>task</h1> 
        <div>
            <input type="text"  value={query} placeholder= {` add to do no-${tc} `} onChange={handleChange} />

        </div>
        <button onClick={handleAdd}>add</button>


    <div>

    {tasks.map((item)=>{

    return <div>< List color = {"green"} title={item.title} status = {item.status} /></div>

}
)}

    </div>

    </div>
  )
}
