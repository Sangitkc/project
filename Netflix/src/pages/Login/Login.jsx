import React,{useState} from 'react'
import './Login.css'
import logo from '../../assets/logo.jpg'
import { login,signup } from '../../firebase'

const Login = () => {

  const [signState,setsSignState]=useState("Sign In")
  const [name,setName] = useState('')
  const [email,Setemail] = useState('')
  const [password,Setpassword] = useState('');

  const userauth = async (event)=>{
    event.prventDefault()
    if(signState==="Sign In"){
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
  }

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==='Sign Up'?
           <input value ={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your name' />:<></>}
         
          <input value ={email} onChange={(e)=>{Setemail(e.target.value)}} type="email" placeholder="Email" />
          <input value ={password} onChange={(e)=>{Setpassword(e.target.value)}} type="password" placeholder='Password'/>
          <button onClick={userauth} type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==='Sign In'?<p>New to Netflix? <span onClick={()=>{
            setsSignState("Sign Up")
          }}>Sign Up Now</span></p>: <p>Already have account? <span onClick={()=>{
            setsSignState("Sign In")
          }}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
