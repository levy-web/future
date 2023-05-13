import { REMOVE_USER, LOGIN_USER, LOAD_USERS, LOGIN_USER_ERROR } from "./UserType";


export function loginUser(email, password) {
  
    return async function (dispatch) {
      
      dispatch({ type: LOAD_USERS });

      try {

        const response = await fetch(`/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          "email":email,
          "password":password
          })
        });
        if(response.ok){
            console.log(response)
            const data = await response.json();
            console.log(data)
            dispatch({
              type: LOGIN_USER,
              payload: data
            })          
          
        }else if (response.status === 422) {
          const error = await response.json();
              throw new Error(error.message);
        }else {
          throw new Error('Network response was not ok.');
        }
        
      }catch (error){
        console.error(error)
        dispatch({
          type: LOGIN_USER_ERROR,
          payload: error
        })
      }
      
    };


}

export const logoutUser = (()=>{
  return{
      type: REMOVE_USER
  }
})