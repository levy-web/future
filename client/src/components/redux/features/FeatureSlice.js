import { ADD_FEATURE, REMOVE_FEATURE, CLEAR_FEATURE } from "./FeatureType";

const initialState = {

    features: []

}

const featureSlice = (state=initialState, action)=>{
    switch(action.type){

        case ADD_FEATURE: return {
            ...state,
            // status: false,
            features: [...state.features, action.payload]
        }
        break;

        case REMOVE_FEATURE: 
        let newArrFeatures = state.features.filter((feature)=> feature.name !== action.payload)
        return {
            ...state,
            // status: false,
            features:[...newArrFeatures]
            
        }
        break;

        case CLEAR_FEATURE: return {
            ...state,
            // status: false,
            features: []
        }
        break;

        

        default: return state
    }
}

export default featureSlice