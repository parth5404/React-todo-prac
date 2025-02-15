import React, { useEffect, useState } from 'react'

function Card({val}){
    return <div>
        <img src={val.thumbnail}></img>
        <span>{val.title}</span>
    </div>
}

const items=10;

const Pagination = () => {
    const [data,setdata]=useState([]);
    const [currpage,setcurrpage]=useState(0);
   async function getdata(){
        try{
            const res=await fetch("https://dummyjson.com/products")
            const val=await res.json();
            setdata(val.products);
        }
        catch(e){
            console.error("error in fetching")
        }
    }
    useEffect(function(){
        getdata();
    },[])
    const totalpages=Math.ceil(data.length/10);
const start=currpage*items;
const end=start+items;
let arr=[];
for(let i=0;i<totalpages;i++){
    arr.push(i);

}
function handleclick(val){
    setcurrpage(val);
}
function next(){
setcurrpage((prev)=>prev+1);
}
function prev(){
    setcurrpage((prev)=>prev-1);

}
  return (
    <div className='prodarr'>
        <div>
            <h4>{currpage}</h4>
<br></br>
<button disabled={currpage === totalpages - 1} onClick={next}>Next</button>
<button disabled={currpage === 0} onClick={prev}>Prev</button>


        </div>
        <div>
            {arr.map(function(val){
                return <button key={val} onClick={()=>handleclick(val)}>{val}</button>
        })}
        </div>
      {
        data.slice(start,end).map(function(val){
                return<div key={val.id}><Card val={val}/></div>
        })
      }
    </div>
  )
}

export default Pagination
