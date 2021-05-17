import {makeStyles} from '@material-ui/styles'

const Style = makeStyles({
    header : {
        width : '100%' ,
        height : 40 ,
        display : 'flex' ,
        flexDirection : 'row' ,
        justifyContent : 'center' ,
        boxShadow : '1px 1px 1px grey' ,
        paddingBottom : 4
    } ,

    navbar : {
        width : '70%' ,
        display : 'flex' ,
        flexDirection : 'row' ,
        justifyContent : 'space-between'
    } ,

    action : {
        display : 'flex' ,
        justifyContent : 'flex-start' ,
        alignItems : 'center' ,
        flex : 2 ,
       
       
    } ,

    menu : {
        display : 'flex' ,
        justifyContent : 'flex-end' ,
        alignItems : 'center' ,
        flex : 1 ,
       
        
    } ,

    link : {
        marginRight : 11 ,
        textDecoration : 'none' ,
        fontWeight : 'normal' ,
        color : 'black' ,
        letterSpacing : 1
    } ,

    search : {
        padding : 6 ,
        border : "none"
    } ,

    usertest : {
        position : 'relative' ,
        backgroundColor : 'orange' ,
        padding: '1px 2px' ,
        top : -10 ,
        fontWeight : 700 ,
        color : 'white' ,
        borderRadius : '50%'
    }
})

export default Style