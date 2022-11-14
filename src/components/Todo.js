import React,{useEffect,useState} from 'react'

export default function Todo() {

const [data,setData]=useState([])
const [input,setInput]=useState('')
const [edit,setEdit]=useState(false)
const [editId,setEditId]=useState('')

const handleChange=(e)=>{
    setInput(e.target.value)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    if(!input){
        alert('Please enter a value')
    }
    else if(input && edit){
        setData(data.map(item=>item.id===editId?{...item,title:input}:item))
        setEdit(false)
        setInput('')
        setEditId('')
    }
    else{
        setData([...data,{id:new Date().getTime().toString(),title:input}])
        setInput('')
    }
}
const handleDelete=(id)=>{
    setData(data.filter(item=>item.id!==id))
}
const handleEdit=(id)=>{
    const item=data.find(item=>item.id===id)
    setEdit(true)
    setInput(item.title)
    setEditId(id)
}

useEffect(()=>{
    const data=localStorage.getItem('data')
    if(data){
        setData(JSON.parse(data))
    }
},[])
useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(data))
},[data])






  return (
    <div>
        <h1>Todo</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange}/>
            <button type="submit">{edit?'Edit':'Submit'}</button>
        </form>
        <ul>
            {data.map((item,index)=>{
                return <li key={index}>{item.title}<button onClick={()=>handleDelete(item.id)}>Delete</button><button onClick={()=>handleEdit(item.id)}>Edit</button></li>
            }
            )}
        </ul>



    </div>
  )
}
