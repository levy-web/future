import React, { useState } from 'react';
import {toast} from 'react-hot-toast'
import {  Link, useNavigate } from 'react-router-dom';
import SideNav from '../SideNav';

const Register = () => {

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPassword, setconfPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const passConfirmed = ((password === confPassword) && (email !=="") && (password !== "")) ? "" : "disabled"

  function handleSubmit(e){
    setIsLoading(true)
    e.preventDefault()
    const formData = {
      "name":username,
      // "phone":phone,
      "email":email,
      "password":password,
      "confirm_password":confPassword
    }

    fetch('https://protexx.onrender.com/users',{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(formData)
    })
    .then((response)=>{
      if(response.ok){
        return response.json()
        
      }else if (response.status === 422) {
        console.log(response)
          return response.json().then(error => {
            throw new Error(error.message);
          });
      }else {
        throw new Error('Network response was not ok.');
      }    
    })
    .then((data)=>{
      console.log(data)
      setIsLoading(false)
      toast.success(`${data.name} registered succesfully, login`)
      navigate('/login')
    })
    .catch(error => {
      // Handle network error or response error.
      console.error('There was an error:', error.message);
      toast.error(error.message)
      setIsLoading(false)
    });
  }

  return (
    <>
    <SideNav/>
      <div className="container my-3 py-3">
        
        <div className="row my-4 h-100">
          <div className="col-md-7 col-lg-7 col-sm-8 mx-auto">
            <div className="card shadow p-5">
              <h1 className="text-center mb-5">Create Account</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                {/* <div className="form-group mb-3">
                  <input
                    type="number"
                    value={phone}
                    onChange={(e)=>{setPhone(parseInt(e.target.value))}}
                    className="form-control"
                    id="phone"
                    placeholder="phone number"
                    required
                  />
                </div> */}
                <div className="form-group mb-3">
                  <input
                    type="text"
                    value={username}
                    onChange={(e)=>{setUserName(e.target.value)}}
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    value={confPassword}
                    onChange={(e)=>{setconfPassword(e.target.value)}}
                    className="form-control"
                    id="confPassword"
                    placeholder="Confirm Password"
                    required
                  />
                </div>

                <div className="text-center mb-4">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className={`btn btn-primary btn-block w-100 ${passConfirmed}`}               
                  >
                   {isLoading ? "Loading..." : "Register"}                    
                  </button>
                </div>
              </form>
              <div className="text-center">
                <p className="mb-0">
                  By signing up, you agree to our{' '}
                  <Link to="/" className="text-info">
                    Terms
                  </Link>{' '}
                  and{' '}
                  <Link to="/" className="text-info">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p>
                  Have an account?{' '}
                  <Link to="/login" className="text-info">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;