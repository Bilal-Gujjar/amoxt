import React,{useState,useEffect} from 'react'

export default function TimeOut() {


const [count,setCount]=useState(0)
useEffect(()=>{
    if(count===5){
        setTimeout(()=>{
            setCount(0)
        },5000)
    }
},[count])




  return (
    <div>
        <h1>TimeOut</h1>
        <button onClick={()=>setCount(count+1)}>Click</button>
        <h2>{count}</h2>

    </div>
  )
}
