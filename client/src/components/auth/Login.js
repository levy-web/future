import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/user/UserAction";
import AdminNav from '../admin/AdminNav'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector((state)=>state.user.token)
  const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
  useEffect(()=>{
    isLoggedIn ? navigate('/admin') : navigate('/login')
  },[isLoggedIn])


  const isLoading = useSelector((state) => state.user.isLoading);  

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    // perform login logic here
    dispatch(loginUser(email, password))
   
  };



  return (
    <>
      <AdminNav/>   
      
      <div className="container my-3 py-3">
        <h2 className="text-center">Log In</h2>
        <div className="row my-4 h-100">

          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="my-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-primary"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Log In"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Login;