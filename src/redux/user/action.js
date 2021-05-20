const User = (Data) => {
    return {
        type : "User" ,
        payload : {
            name : Data.name ,
            img : Data.img
        }
    }
}

export {User}