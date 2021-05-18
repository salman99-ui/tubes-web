const initialvalues = {
    data : []
}

const reducer = (state = initialvalues , action) => {
    switch(action.type){
        case "Add" :
            return { data : [...state.data , 
                            {name : action.payload.name ,
                             describe : action.payload.describe ,
                             price : action.payload.price ,
                             linksImg : action.payload.linksImg
                             }]
                                
                    }
        default :
         return state 
    }
}

export default reducer