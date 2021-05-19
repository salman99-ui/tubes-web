const initialvalues = {
    quantity : 0 ,
    data : [] ,
    total_price : 0
}

const reducer = (state = initialvalues , action) => {
    switch(action.type){
        case "Add" :
            return { quantity : state.quantity + 1 ,  
                     data : [...state.data , 
                            {name : action.payload.name ,
                             describe : action.payload.describe ,
                             price : action.payload.price ,
                             linksImg : action.payload.linksImg ,
                             quantity : action.payload.quantity
                             }] ,
                     total_price : state.total_price + action.payload.price
                    
                    }
        case "Delete" : 
            return {
                quantity : 0 ,
                data : [] ,
                total_price : 0 ,
                
            }
        default :
         return state 
    }
}

export default reducer