import { combineReducers } from "redux";
import cocktail_reducer from "./cocktail_reducer";

const rootReducer = combineReducers({
    list_cocktails: cocktail_reducer
})

export default rootReducer