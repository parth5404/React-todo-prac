import React, { useRef, useState, useEffect } from 'react';

const App = () => {
  const [val, setval] = useState('');
  const [data, setdata] = useState([]);
  const [editid, seteditid] = useState(null);
  const [edit, setedit] = useState(true);
  const [donecnt, setdonecnt] = useState(0);
  const ipref = useRef(null);

  // Load tasks from local storage when the app starts
  useEffect(() => {
    const savedData = localStorage.getItem("tasks");
    if (savedData) setdata(JSON.parse(savedData) || []);
  }, []);

  // Save tasks to local storage whenever `data` changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(data));
  }, [data]);

  function handleip(e) {
    setval(e.target.value);
  }

  function handleaddtaskbtn() {
    if (val !== '') {
    for(let i=0;i<data.length;i++){
      if(val===data[i]){
        alert("masti nhi duplicate")
        return ;
      }
    }  
      setdata((prev) => [...prev, val]);
    }
    else alert('Valid Task Give');
   
    setval('');
  }

  function edittask(idx) {
    seteditid(idx);
    setedit(false);
    setTimeout(() => {
      ipref.current?.focus();
    }, 0);
  }

  function donefx(idx) {
    if (data[idx] === '') {
      alert("No empty");
      return;
    }
    seteditid(null);
    setedit(true);
  }

  function remove(idx) {
    const updatedData = data.filter((_, index) => index !== idx);
    setdata(updatedData);
  }

  function toggler(e) {
    if (e.target.checked) {
      setdonecnt((prev) => prev + 1);
    } else {
      setdonecnt((prev) => prev - 1);
    }
  }
  function checkdup(value, idx, data) {
    for(let i=0;i<data.length;i++){
      if(data[i]===value.trim() && i!==idx){
        alert("masti nhi")
        return false;
      }
    }
    return true;
  }
  

  return (
    <div>
      <input type="text" name="search"></input>
      <br></br>
      <br></br>
      <input type="text" value={val} placeholder="Enter a task" onChange={handleip} />
      <button onClick={handleaddtaskbtn}>Add Task</button>
      <p>Completed Tasks: {donecnt}</p>
      {data.map((val, idx) => (
        <div key={idx}>
          <input type="checkbox" onChange={(e) => toggler(e)} />
          {editid === idx ? (
            <div>
              <input
                ref={ipref}
                value={val}
                onChange={(e) => {
                  let newdata = [...data];
                  if (checkdup(e.target.value, idx, newdata)) {
                    newdata[idx] = e.target.value;
                    setdata(newdata);
                  }
                }}
              />
              {edit === false && <button onClick={() => donefx(idx)}>Done</button>}
            </div>
          ) : (
            <span>{val}</span>
          )}
          {edit === true && <button onClick={() => edittask(idx)}>Edit</button>}
          <button onClick={() => remove(idx)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default App;
