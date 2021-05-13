import React , {useState ,useEffect}from 'react'
import {GoogleLogin} from 'react-google-login'
import {Login} from '../../Global/Styles'
import Axios from 'axios'
import * as Yup from 'yup'
import {Formik , Form , Field , ErrorMessage} from 'formik'
import {useHistory} from 'react-router-dom'

function Index() {
    
    const [ error , setErr] = useState('')
    const history = useHistory()
    const response = (data) => {
        const {email , name} = data.profileObj
        const data2 = {
            email , name
        }

        Axios.post("http://localhost:4000/auth/check" , data2).then(result => {
            console.log(result.data)
        })
    }
    const initialvalues = {email : '' , password : ''}
    const schemavalidation = Yup.object().shape({
        email : Yup.string().email('Must sign as email').required('Required Field') ,
        password : Yup.string().required('Required Field')
    })
    const handlesubmit = (values , actions) => {
        Axios.post('http://localhost:4000/auth/login' , values).then( result => {
            if(result.status == 200){
                localStorage.setItem('token' , result.data.token)
                history.push('/home')
            }else{
                setErr(result.data.message)
            }
        })
    }
    const classes = Login()

    useEffect( () => {
    } , [error])
    return (
        <div className={classes.container} >
            <div className={classes.body}>
                <p className={classes.error}>{error}</p>
                <h2>Login</h2>
                <div className={classes.form}>
                    <Formik
                        initialValues={initialvalues}
                        validationSchema={schemavalidation}
                        onSubmit={handlesubmit}
                    >
                        <Form>
                        <label htmlFor="email">Email</label>
                        <Field type="text" id="email" className={classes.input} name="email"/>
                        <ErrorMessage name="email" className={classes.error}>
                            {msg => <p style={{color : 'red'}}> {msg}</p>}
                        </ErrorMessage>

                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" className={classes.input} name="password" />
                        <ErrorMessage name="password" className={classes.error}>
                            {msg => <p style={{color : 'red'}}> {msg}</p>}
                        </ErrorMessage>

                        <p className={classes.forgot}><a href="">Forgot Password ?</a></p>
                        <button className={classes.login}>Login</button>
                        <GoogleLogin 
                            clientId="897389787521-pqme3iu23edjqdsobd2h6a0uiel4bcvq.apps.googleusercontent.com"
                            onSuccess={response}
                            onFailure={response}
                        />
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Index
