import {makeStyles} from '@material-ui/styles'

const Login = makeStyles({
    container : {
        display : 'flex' ,
        flexDirection : 'column' ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
        height : 800
    } ,

    body : {
        width : 360 ,
        padding : 20
    } ,

    form : {
        flex : 1 ,
       
    } ,

    input : {
        padding : 8 ,
        display : 'block' ,
        width : '95%' ,
        marginBottom : 10 ,
        border : '2px solid grey' ,
        borderRadius : 5
    } ,
    forgot : {
        color : '#FFA62B' ,
        float : 'right'
    },

    login : {
        padding : 8 ,
        display : 'block' ,
        width : '100%' ,
        backgroundColor : '#FFA62B' ,
        color : 'white' ,
        fontWeight : 'bold' ,
        fontSize : 16
    } ,

    error : {
        marginBottom : 20 ,
        
    } ,

    texterror : {
        textAlign : 'center' ,
        color : 'red'
    }
})

export default Login