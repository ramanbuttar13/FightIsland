export default function(state = {}, action) {

    switch(action.type){
            
        case "SINGLE_BLOG":
            return {...state, blog: action.payload}

        default:
            return state;
    }
        
}