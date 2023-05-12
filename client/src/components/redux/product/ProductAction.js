import { FETCH_PRODUCTS, FETCH_ONE_PRODUCTS, FETCH_ONE_PRODUCTS_ERROR, REMOVE_PROD_FEATURE,
  LOAD_ONE_PRODUCTS, LOAD_PRODUCTS, FETCH_PRODUCTS_ERROR, ADD_PRODUCT_COLORS } from "./ProductType"

  export const addProductColor = ((id , image_url)=>{
    return{
        type: ADD_PRODUCT_COLORS,
        payload:{id:id, image_url:image_url}
    }
  })

  export const removeProdFeatures = ((id)=>{
    console.log(id)
    return{
        type: REMOVE_PROD_FEATURE,
        payload:id
    }
})


export function fetchProducts() {


    return async function (dispatch) {
      // dispatch({ type: LOAD_PRODUCTS });

      try {

        const response = await fetch('https://protexx.onrender.com/products')
        if (!response.ok) {
            dispatch({
                type: FETCH_PRODUCTS_ERROR,
                payload: 'Network response was not ok'
              })
        }
        const data = await response.json();
        dispatch({
            type: FETCH_PRODUCTS,
            payload: data
          })        
      }
      catch (error){
        console.error(error)
        dispatch({
            type: FETCH_PRODUCTS_ERROR,
            payload: (error)
        })

      }      

    };
}

export function fetchOneProduct(id) {


  return async function (dispatch) {
    dispatch({ type: LOAD_PRODUCTS });

    try {

      const response = await fetch(`https://protexx.onrender.com/products/${id}`)
      if (!response.ok) {
          dispatch({
              type: FETCH_ONE_PRODUCTS_ERROR,
              payload: 'Network response was not ok'
            })
      }
      const data = await response.json();
      console.log(data)
      dispatch({
          type: FETCH_ONE_PRODUCTS,
          payload: data
        })        
    }
    catch (error){
      console.error(error)
      dispatch({
          type: FETCH_ONE_PRODUCTS_ERROR,
          payload: (error)
      })

    }      

  };
}