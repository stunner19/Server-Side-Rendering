import { FETCH_CURRENT_USER } from '../actions';

export default function(state = null,action){
    switch(action.type){

        case FETCH_CURRENT_USER :
            return action.payload.data || false     // false is when action.payload.data is undefined.
        default :
            return state;
    }
};