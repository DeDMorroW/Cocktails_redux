import axios from "axios";
import { API_ALL, API_BY_DETAIL, API_BY_NAME } from "../config";
import { COCKTAILS } from "./types";

export const search_by_name = (text) => async(dispatch) =>{
    try{
        // const res = await axios.get(API_ALL + text)
        const res = await axios.get(API_BY_NAME + text)
        // console.log(res.data.drinks)
        let {drinks} = res.data
        dispatch({
            type: COCKTAILS,
            payload:drinks
        })
    }catch (err){
        console.log(err);
    }
    
}