import {toast} from 'react-hot-toast'
import { REMOVE_USER, LOGIN_USER, LOAD_USERS, LOGIN_USER_ERROR } from "./UserType";


export function loginUser(email, password) {
  
    return async function (dispatch) {
      
      dispatch({ type: LOAD_USERS });

      try {

        const response = await fetch(`https://protexx.onrender.com/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          "email":email,
          "password":password
          })
        });
        if(response.ok){
            const data = await response.json();
            dispatch({
              type: LOGIN_USER,
              payload: data
            })   
            toast.success(`${data.message}`);       
          
        }else if (response.status === 422) {
          const error = await response.json();
              throw new Error(error.message);
        }else {
          throw new Error('Network response was not ok.');
        }
        
      }catch (error){
        console.error(error.message)
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: error
        })
        toast.error(error.message)
      }
      
    };


}

export const logoutUser = (()=>{
  return{
      type: REMOVE_USER
  }
})