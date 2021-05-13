import React, {useState} from 'react'
import Axios from 'axios'
import * as Yup from 'yup'
import {Formik , Form , Field , ErrorMessage} from 'formik'
import {useHistory} from 'react-router-dom'

import './profile.css'
function Index() {
    const [check , setCheck] = useState('')
    const history = useHistory()
    const token = localStorage.getItem('token')
    const validationschema = Yup.object().shape({
        name : Yup.string().required('this field is required') ,
        ttl : Yup.string().required('this field is required') ,
        gender : Yup.string().required('this field is required') ,
        nohp : Yup.string().required('this field is required') ,
        email : Yup.string().email().required('this field is required') ,
        alamat : Yup.string().required('this field is required')

    })
    const handlesubmit = (values , actions) => {
       
       console.log(values)
    }
    return (
        <div className="container-profile">
            <div className="body-profile">
            
                <div className="profile-edit">
                    <Formik
                        initialValues={{name : '' , ttl : '' , gender : '' , nohp : '' , email : '' , alamat : ''}}
                        validationSchema={validationschema}
                        onSubmit={handlesubmit}
                    >
                        <Form>
                            <div className="profile">
                                <p className="text-profile">Edit Profile</p>
                                <div className="gap">
                                    <label for="nama">Nama</label>
                                    <Field id="nama" type="text" className="input-profile" name="name" />
                                    <ErrorMessage name="name">
                                        {msg => <span style={{color : 'red'}}>{msg}</span>}
                                    </ErrorMessage>
                                </div>
                                
                                <div className="gap">
                                    <label for="tgl">Tanggal Lahir</label>
                                    <Field id="tgl" type="text" className="input-profile" name="ttl" />
                                    <ErrorMessage name="ttl">
                                        {msg => <span style={{color : 'red'}}>{msg}</span>}
                                    </ErrorMessage>
                                </div>

                                <div className="gap">
                                    <p>Jenis Kelamin</p>
                                    <label for="men">Pria</label>
                                    <Field  type="radio" className="gender" value="Pria" name="gender"  />
                                    <label for="woman">Wanita</label>
                                    <Field id="woman"  type="radio" className="" value="Wanita" name="gender" />
                                    <ErrorMessage name="gender">
                                        {msg => <span style={{color : 'red'}}>{msg}</span>}
                                    </ErrorMessage>
                                </div>
                                
                                
                            </div>
                            <div className="kontak">
                                <p className="text-kontak">Edit Kontak</p>
                                <div className="gap">
                                    <label for="nohp">Nomor Hp</label>
                                    <Field id="nohp" type="text" className="input-profile" name="nohp" />
                                    <ErrorMessage name="nohp">
                                        {msg => <span style={{color : 'red'}}>{msg}</span>}
                                    </ErrorMessage>
                                </div>

                                <div className="gap">
                                    <label for="email">Email</label>
                                    <Field id="email" type="text" className="input-profile" name="email" />
                                    <ErrorMessage name="email">
                                        {msg => <span style={{color : 'red'}}>{msg}</span>}
                                    </ErrorMessage>
                                </div>

                                <div className="gap">
                                    <label for="alamat">Alamat</label>
                                    <Field id="alamat" as="textarea" className="input-profile" name="alamat" />
                                    <ErrorMessage name="alamat">
                                        {msg => <span style={{color : 'red'}}>{msg}</span>}
                                    </ErrorMessage>
                                </div>

                                <div className="gap">
                                    <button type="submit" className="save">Save Changes</button>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Index
