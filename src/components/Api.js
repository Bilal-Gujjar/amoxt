import React,{useState
,useEffect} from 'react'

export default function Api() {


const [data,setData]=useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setData(data))
},[])



  return (
    <div>
        <h1>Api</h1>
        <ul>
            {data.map((item,index)=>{
                return <li key={index}>{item.name}</li>
            }
            )}
        </ul>

    </div>
  )
}


