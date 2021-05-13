import React , {useState , useEffect} from 'react'
import Axios from 'axios'
import * as Yup from 'yup'
import {Formik , Form , Field , ErrorMessage} from 'formik'
import {useHistory} from 'react-router-dom'
import "./App.css";

function App() {


  const [ error , setErr] = useState('')
    const history = useHistory()

  const initialvalues = {username : '' , email : '' , password : ''}

  const validationschema = Yup.object().shape({
    email : Yup.string().email('Email is required').required('Required Field') ,
    username : Yup.string().required('This field is required') ,
    password : Yup.string().required('This field is required')
  })

  const handlesubmit = (values , actions) => {
    Axios.post('http://localhost:4000/auth/register' , values).then( result => {
      if(result.status == 201){
        history.push('/login')
      }else{
          setErr(result.data.message)
      }
    })
  }
  return (
    <div className="App">
      <body className="App-body">
      
        <div className="register-box">
          <h2 style={{ paddingTop: 40 }}>Register</h2>
          <p>
            Already have an account?<a href="#"> Login</a>
          </p>
          <div>
            <seperator className="seperator" />
            <seperator className="seperator" />
          </div>

        <Formik 
        initialValues={initialvalues}
        validationSchema={validationschema}
        onSubmit={handlesubmit}
        >
          <Form>
            <label style={{ color: "#C4C4C4", display: "inline-block" }}>
              Email
            </label>

            <Field
              type="text"
              name="email"
              placeholder="name@email.com"
              className="box-input"
            />
            <ErrorMessage name="email">
              {msg => <p style={{color : 'red'}}>{msg}</p>}
            </ErrorMessage>

            <label style={{ color: "#C4C4C4", display: "inline-block" }}>
              Username
            </label>
            <Field
              type="text"
              name="username"
              placeholder="username"
              className="box-input"
            />
            <ErrorMessage name="username">
              {msg => <p style={{color : 'red'}}>{msg}</p>}
            </ErrorMessage>

            <label style={{ color: "#C4C4C4", display: "inline-block" }}>
              password
            </label>
            <Field
              type="password"
              name="password"
              className="box-input"
              placeholder="********"
            />
            <ErrorMessage name="password">
              {msg => <p style={{color : 'red'}}>{msg}</p>}
            </ErrorMessage>

            <input type="submit" value="register" className="box-register" />
            </Form>
          </Formik>
        </div>
      </body>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
