import * as types from '../actions';
const initState = {
    response: [],

}
export default function (state = initState, action) {
    const response = action.response;




    switch (action.type) {
        case types.GET_ZIPCODE_DETAILS_SUCCESS:

            
            return { ...state, response };



        case types.GET_ZIPCODE_DETAILS_ERROR:
            return { ...state, response };
        default:
            return state;
    }

};