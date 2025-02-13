import React, { useRef, useState } from 'react';

const App = () => {
  const [val, setval] = useState('');
  const [data, setdata] = useState([]);
  const [editid, seteditid] = useState(null);
  const [edit,setedit]=useState(true);
  const[donecnt,setdonecnt]=useState(0);
  const [totalcnt,settotalcnt]=useState(0);
  const ipref = useRef(null);

  function handleip(e) {
    setval(e.target.value);
  }

  function handleaddtaskbtn() {
    if (val !== '') setdata((prev) => [...prev, val]);
    else alert('Valid Task Give');
    setval('');
  }

  function edittask(idx) {
    seteditid(idx);
    setedit(false);
    setTimeout(() => {
      ipref.current?.focus();  // Auto-focus on the input field after state update
    }, 0);
  }
  function donefx(idx){
    if (data[idx].trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    seteditid(null) 
    setedit(true)
  
  }
  function remove(idx) {
    setdata(data.filter((_, i) => i !== idx));
  }
  function toggler(e){
if(e.target.checked){
  setdonecnt((prev)=>prev+1);
  console.log(donecnt)
}

  }
  

  return (
    <div>
      <input type="text" value={val} placeholder="Enter a task" onChange={handleip} />
      <button onClick={handleaddtaskbtn}>Add Task</button>
      {data.map((val, idx) => (
        <div key={idx}>
          <input type="checkbox" onChange={(e)=>toggler(e)}></input>
          {editid === idx ? (
            <div>
              <input
                ref={ipref}
                value={val}
                onChange={(e) => {
                  let newdata = [...data];
                  newdata[idx] = e.target.value;
                  setdata(newdata);
                }}
              />
         {edit === false && <button onClick={()=>donefx(idx)}>Done</button>}
            </div>
          ) : (
            <span>{val}</span>
          )}
        {edit === true && <button onClick={() => edittask(idx)}>Edit</button>}
        <button onClick={()=>remove(idx)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default App;
