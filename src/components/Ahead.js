import React from 'react'

export default function Ahead() {
gestions.
const [data,setData]=React.useState([])
const [search,setSearch]=React.useState('')
const [suggestions,setSuggestions]=React.useState([])
const [show,setShow]=React.useState(false)
const [selected,setSelected]=React.useState('')
const [selectedId,setSelectedId]=React.useState('')

React.useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setData(data))
},[])
const handleChange=(e)=>{
    setSearch(e.target.value)
    setShow(true)
    setSuggestions(data.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase())))
}
const handleSelect=(e)=>{
    setSearch(e.target.innerText)
    setShow(false)
    setSelected(e.target.innerText)
    setSelectedId(e.target.id)
}
const handleBlur=()=>{
    setShow(false)
}






  return (
    <div>
        <h1>Ahead</h1>
        <input type="text" value={search} onChange={handleChange} onBlur={handleBlur}/>
        {show && <ul>
            {suggestions.map((item,index)=>{
                return <li key={index} id={item.id} onClick={handleSelect}>{item.name}</li>
            }
            )}
        </ul>}
        <h1>{selected}</h1>
        <h1>{selectedId}</h1>

        
    
    </div>
  )
}
