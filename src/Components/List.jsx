import React from "react";


export default function List(props) {

    const {title,status,color} = props
  return (


    <div>
        <ul>

            <h1 style={{color}}>{`${title}-${status}`}</h1>
        </ul>
       {/* <h3>{`${title}-${status}`}</h3>  */}
   
    </div>
  )
}
