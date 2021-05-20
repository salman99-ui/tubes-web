const initialValues = {
    saldo : 19000000 ,
    last_transaction : []
}

const Reducer = (state = initialValues , action) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date()
    var calender = `${date.getDate()} - ${months[date.getMonth()]} - ${date.getFullYear()}`
    
    switch(action.type){

        case "AddOrder" : 

            return{
                saldo : state.saldo - action.payload.price ,

                last_transaction : [...state.last_transaction , {
                    name : action.payload.name ,
                    linksImg : action.payload.linksImg ,
                    price : action.payload.price ,
                    quantity : action.payload.quantity ,
                    calender : calender
                }]
            }

        default :
            return state
    }
}

export default Reducer