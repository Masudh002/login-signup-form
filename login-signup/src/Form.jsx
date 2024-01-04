import React, { useState } from 'react'

const Form4 = () => {

    const[formData, setFormData] = useState({
         firstName:"",
         email:"",
         password:"",
         confirmation:""
        }
    )
    const [message , setMessage] =useState(null);
    const[display, setDisplay] = useState("Signup");

    function changeDisplay (){
        if (display === "Signup") {
            setDisplay("Login");
        }else {
            setDisplay("Signup")
        }         
    }


    function handleChange (event){
       setFormData( (prevFormData) => {
        const{name, value} = event.target
        return{
            ...prevFormData,
            [name]: value,
        }
       }) 
    }
    function handleSubmit(event){
        event.preventDefault();
        if( !formData.firstName || !formData.email || !formData.password || !formData.confirmation){
            setMessage("Error: Please fill in all required fields.");
            return;
        } 
        if ( formData.password === formData.confirmation){
            setMessage("Success: Done");
        } else {
            setMessage("Error: Passwords dont match");
            return;
        }
    }
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh"}} >
        <div style={{width:"250px", border:"1px solid black", borderRadius:"5px"}}>

            <h1 style={{textAlign:"center"}}>{display}</h1>

            <form onSubmit={handleSubmit} style={{margin:"10px", display:"flex", justifyContent:"center", alignItems:"center",  flexDirection:"column", gap:"15px"}}>
                {display === "Signup" && <input type="text" name='firstName' value={formData.firstName} placeholder='Name' onChange={handleChange} required/> }
                <input type="email" name='email' value={formData.email} placeholder='Email' onChange={handleChange} required /> 
                <input type="password" name='password' value={formData.password} placeholder='Password' onChange={handleChange} required/> 
                {display === "Signup" && <input type="password" name='confirmation' value={formData.confirmation} placeholder='Confirm Password' onChange={handleChange} required /> }
                {display === "Login" && <p style={{fontSize:"12px", margin:"0"}}>Forgot password? <span><a href="#/"> Click here</a></span></p> }

                {display === "Signup" && (message && <p style={{ color: message.includes('Error') ? 'red' : 'green' , fontSize: "12px", textAlign: 'center' }}>{message}</p>) }
                

                <button style={{width:"100%", padding:"5px", background:"blue", color:"#fff", border:"none", borderRadius:"5px", cursor:"pointer" }}> 
                     {display === "Signup"? "Submit" : "Login"}
                </button>
            </form>

            {display === "Signup" ?
             <p style={{fontSize:"12px", textAlign:"center" }}> Already have an account? 
                 <button style={{fontSize:"12px", border:"none", cursor:"pointer", textDecoration:"underline", background:"transparent"}} onClick={changeDisplay}>Login here</button>
             </p> : 
             <p style={{fontSize:"12px", textAlign:"center"}}> Don't have an account? 
                 <button style={{fontSize:"12px", border:"none", cursor:"pointer", textDecoration:"underline", background:"transparent"}} onClick={changeDisplay}>Sign up here</button>
             </p>
            }  

        </div>     
    </div>
  )
}

export default Form4
