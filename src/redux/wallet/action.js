const Order = (price) => {
    return{
        type : "Order" ,
        price : price ,
        
    }
}

const AddOrder = (data) => {
    return {
        type : "AddOrder" ,
        payload : {
            name : data.name ,
            price : data.price ,
            linksImg : data.linksImg ,
            quantity : data.quantity
        }

    }
}
export {Order , AddOrder}