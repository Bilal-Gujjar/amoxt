import React ,{useState,useEffect} from 'react'



export default function FieldSelector() {



const [color,setColor]=useState('red')

const handleFocus=()=>{
    setColor('green')
}
const handleBlur=()=>{
    setColor('gray')

}




  return (
    <div>
        <h1>FieldSelector</h1>
        <button style={{backgroundColor:color}} onFocus={handleFocus} onBlur={handleBlur}>Click</button>
    </div>
  )
}
