import React from 'react'

export default function DataSend() {
    const handleSubmit=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        const data={name,email,password}
        fetch('https://jsonplaceholder.typicode.com/users',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json; charset=UTF-8',
            },
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }


    
  return (
    <div>
        <h1>DataSend</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name"/>
            <input type="email" name="email" placeholder="email"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">Submit</button>
        </form>

    </div>
  )
}
