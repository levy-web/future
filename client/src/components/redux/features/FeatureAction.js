import { ADD_FEATURE, REMOVE_FEATURE, CLEAR_FEATURE } from "./FeatureType";

export const addFeatures = ((feature)=>{
    return{
        type: ADD_FEATURE,
        payload:feature
    }
})

export const removeFeatures = ((item)=>{
    return{
        type: REMOVE_FEATURE,
        payload:item
    }
})

export const clearFeatures = (()=>{
    return{
        type: CLEAR_FEATURE
    }
})