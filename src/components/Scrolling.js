import React,{useState,useEffect} from 'react'

export default function Scrolling() {
 

    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(false)
    const [hasMore,setHasMore]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setError(false)
        fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=10`)
        .then(res=>res.json())
        .then(data=>{
            setData(prevData=>{
                return [...prevData,...data]
            })
            setHasMore(data.length>0)
            setLoading(false)
        })
        .catch(err=>{
            setError(true)
        })
    },[page])
    const handleScroll=()=>{
        if(window.innerHeight+document.documentElement.scrollTop!==document.documentElement.offsetHeight || loading){
            return
        }
        setPage(prevPage=>prevPage+1)
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    },[])



  return (
    <div>
        <h1>Scrolling</h1>
        <ul>
            {data.map((item,index)=>{
                return <li key={index}>{item.name}</li>
            }
            )}
        </ul>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>

    </div>
  )
}
