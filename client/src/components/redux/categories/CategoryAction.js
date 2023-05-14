import { FETCH_CATEGORIES, ADD_CATEGORIES, ADD_TO_PROTECTED_AREA, LOAD_CATEGORIES, 
  FETCH_ERROR, ADD_TO_SIMILAR_PRODUCTS, ADD_TO_PROTECTED_AREA_SIMILAR_PRODUCTS, 
  RESET_PROTECTED_AREA_SIMILAR_PRODUCTS, ADD_PRODUCT_COLOR } from "./CategoryType";


export const addCategory = ((product)=>{
  return{
      type: ADD_CATEGORIES,
      payload:product
  }
})

export const addProductColor = ((id, product)=>{
  return{
      type: ADD_PRODUCT_COLOR,
      payload:{product:product, id:id}
  }
})


export const addToSimilar = ((product)=>{
  return{
      type: ADD_TO_SIMILAR_PRODUCTS,
      payload:product
  }
})

export const addToSimilarProtectedArea = ((product)=>{
  return{
      type: ADD_TO_PROTECTED_AREA_SIMILAR_PRODUCTS,
      payload:product
  }
})

export const addToProtectedArea = ((product, category)=>{
  return{
      type: ADD_TO_PROTECTED_AREA,
      payload:{product:product, category:category}
  }
})

export const resetProtectedArea = (()=>{
  return{
      type: RESET_PROTECTED_AREA_SIMILAR_PRODUCTS
  }
})

export function fetchCategories() {

    return async function (dispatch) {
      dispatch({ type: LOAD_CATEGORIES });

      try {

        const response = await fetch('https://protexx.onrender.com/categories')
        if(response.ok){
          const data = await response.json();
          dispatch({
            type: FETCH_CATEGORIES,
            payload: data
          })
        }else if (response.status === 422) {
          const error = await response.json();
              throw new Error(error.message);
          }else {
          throw new Error('Network response was not ok.');
          } 
      
      }
      catch (error){
        console.error(error)
        dispatch({
            type: FETCH_ERROR,
            payload: (error)
        })

      }      

    };
}