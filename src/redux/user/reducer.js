const initialValues = {
    name : '' ,
    img  : '' 
}

const reducer = (state = initialValues , action) => {
    switch(action.type){
        case "User" :
            return {
                name : action.payload.name ,
                img  : action.payload.img
            }
        default : 
            return state
    }
}

export default reducer