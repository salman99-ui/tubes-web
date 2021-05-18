
const Add = (data) => {
    return {
        type : "Add" ,
        payload : {
            name : data.name ,
            describe : data.describe ,
            price : data.price ,
            linksImg : data.linksImg
           
        }
    }
}

export {Add}