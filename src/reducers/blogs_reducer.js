export default function(state = {}, action) {

    switch(action.type){
        case "ALL_BLOGS":
            return {...state, blogs: action.payload}
            
        case "SINGLE_BLOG":
            return {...state, blog: action.payload}

        default:
            return state;
    }
        
}