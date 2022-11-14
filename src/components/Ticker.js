import React,{useState,useEffect} from 'react'

export default function Ticker() {



const [count,setCount]=useState(0)
useEffect(()=>{
    const interval=setInterval(()=>{
        setCount(count+1)
    },1000)
    return ()=>clearInterval(interval)
},[count])





  return (
    <div>
        <h1>Ticker</h1>
        <h2>{count}</h2>

    </div>
  )
}
