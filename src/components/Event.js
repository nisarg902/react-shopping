import React from 'react'

const Event = () => { 

    const CourseName ="reactjs";
    const selectState ="Nagpur"

      const showWelcome = () => {
    alert("msg has been shown");
  };


      const showmsg = (msg) => {
    alert(msg);
  };

    const onStateChange = () =>
    (
      alert("state changed happened")
    )

    const onTextChange = ()=>(
      console.log("value changes..")
      
    )

    const MouseEnter = () =>(
       console.log("enter inside div")
    )

    const MouseLeft =() =>(
      console.log("mouseleft")
    )
    return(
     <div className="p-3">

      <button onClick={showWelcome}>Click Me</button>

      <br /><br />

      <button onClick={() => showmsg("ab sahi hoga")}>
        CLICK ME
      </button>

      <br /><br />

      <button onClick={() => showmsg("ab barabar se hoga")}>
        CLICK ME 2
      </button>

          
          <select  onChange={onStateChange} value={selectState}>
              <option>slect state</option>
              <option>Nagpur</option>
              <option>GOA</option>
              <option> kolhapur</option>
          </select>
        <input type='text'  onChange={onTextChange}/>
        <input type="text" value={CourseName}/>
        <br></br>
        <h2>learning-{CourseName}</h2>

        <div onMouseEnter={MouseEnter} onMouseLeave={MouseLeft} style={{width:'200px',height:'200px',backgroundColor:'red'}}>
          DIV AREA -{CourseName}
        </div>
      </div>
    )
  


}; 

export default Event 