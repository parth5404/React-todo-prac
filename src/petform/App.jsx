import React from 'react'
import { useState } from 'react'
import Table from './petform/Table';
const obj={
  petname:"",
  pettype:"",
  breed:"",
  name:"",
  email:"",
  phone:""
}
const App = () => {
const [val,setval]=useState(obj);
const [form,setform]=useState([]);
const [table,settable]=useState(false);
const {petname,pettype,breed,name,email,phone}=val;


function change(e){
  const {name,value}=e.target;
  setval((prev)=>({
    ...prev,
    [name]:value
  }))
}
function submit(){
  setform((prev)=>(
    [...prev,
    val]
  ))
  settable(true);
  setval(obj);
}
if(!table){
  return (
    <div >
      <form>
        <input type="text" name="petname" value={petname} placeholder="PetName" onChange={change}>
        </input>
        <br></br>
        
       <span>Pet Type:</span> <select value={pettype} name="pettype" placeholder="petType" onChange={change}>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Bird">Bird</option>
                    </select>
        <br></br>   
        <input type="text"value={breed} name="breed" placeholder="Breed" onChange={change}>
        </input>
        <br></br>   
        <input type="text"value={name} name="name" placeholder="Name" onChange={change}>
        </input>
        <br></br>   
        <input type="text"value={email} name="email" placeholder="Email" onChange={change}>
        </input>
        <br></br>   
        <input type="text"value={phone} name="phone" placeholder="Phone" onChange={change}>
        </input>
      </form>
      <button onClick={submit}>Submit Form</button>
    </div>
  )
}
return <Table formData={form}></Table>
}

export default App
