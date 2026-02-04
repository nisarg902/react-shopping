import React, { useState } from 'react'

const FormComponent = () => {

   const [users] =useState([
      {userId:'john1'},
      {userId:'john2'}
   ]);

   const [usermsg,setusermsg]=useState('');
   const[isuserValid,setisuserValid]=useState(false);
   const[pwdmsg,setpwdmsg]=useState('');
   const[capsStatus,setcapStatus]= useState(false);

   function verifyuserId(e) {
       for(var user of users)
         {
         if(user.userId===e.target.value){
            setusermsg('try another');
            setisuserValid(false);
            break;
         }else{
            setusermsg("available");
            setisuserValid(true);
         }
       }
}

function Hideusermsg(e) {
    setusermsg("")
   
}
function verifypassword(e){
    if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/))
      {
         setpwdmsg("sstrong password");                                                                                                                                                         
      }else{
         if(e.target.value.length<4){
            setpwdmsg("poor password")
         }else{
               setpwdmsg("weak password");
         }
      }               
}
 function Hidepwdmsg() {
   setpwdmsg('')
   
 }
  function verifycaps(e){
   if(e.keyCode>=65&&e.keyCode<=90){
      setcapStatus(true);

   }else{
      setcapStatus(false)
   }

  }
  return (
    <div className='container-fluid'>
         <h2>Register  user</h2>
         <dl>
            <dt> user id</dt>
            <dd> 
               <input type="text" onBlur={Hideusermsg} onKeyUp={verifyuserId}/>
               <dd className={(isuserValid===true)?'text-success':'text-danger'}>{usermsg}</dd>
            </dd>
            <dt> password</dt>
            <dd> 
               <input type="password" onKeyPress={verifycaps} onBlur={Hidepwdmsg} onKeyUp={verifypassword}/>
            </dd>
            <dd>{pwdmsg}</dd>
            <dd className={(capsStatus==true)?'d-block':'d-none'}>
               <span className="bi bi-exclamation-triangle">
               CAPS ON
               </span>

            </dd>
         </dl>

    </div>
  )
}

export default FormComponent