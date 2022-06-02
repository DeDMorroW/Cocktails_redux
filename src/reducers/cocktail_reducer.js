import { COCKTAILS } from "../actions/types";

const initialState =[]
const cocktail_reducer = (cocktail=initialState, action) =>{
    const {type, payload} = action;

    switch (type){
        case COCKTAILS:
            return payload
        default:
            return cocktail
    }
}

export default cocktail_reducer