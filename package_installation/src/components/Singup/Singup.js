import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

const Singup = () => {
    const formik =  useFormik({
        initialValues:{
            name:'',
            email:'',
            phone:'',
            password:'',
        },
        validationSchema:yup.object({
            name: yup.string().min(2, "Name must have atleast 2 characters").required() ,
            email:yup.string().email().required(),
            password:yup.string().min(6,"Password must have atleast 6 characters").required(),
            phone:yup.number("Phone must have numeric value").min(11, "Phone Minimum 11 Characters").required()
        }),
        onSubmit:(values,{resetForm}) =>{
            console.log(values);
            resetForm({values:'' })
        }

    });

  //useState replise is formik
  //const [info, setUserinfo] = useState({name:'',email:'',phone:'',password:''})

//   const handleChange = (event) =>{
//     const fieldName = event.target.name;
//     setUserinfo((olduser) =>{
//         return {...olduser,[fieldName]:event.target.value}
//     })

//   }  
//   const handleSubmit = (e) =>{
//     e.preventDefault();

//     setUserinfo({name:'',email:'',phone:'',password:''})
//     console.log(info);

//   }

  const {name, email, phone,password} = formik.values;
  const renderNameError = formik.touched.name && formik.errors.name && <samp style={{color:'red'}}>{formik.errors.name}</samp>
  const renderEmailError = formik.touched.email && formik.errors.email && <samp style={{color:'red'}}>{formik.errors.email}</samp>
  const renderPhoneError = formik.touched.phone && formik.errors.phone && <samp style={{color:'red'}}>{formik.errors.phone}</samp>
  const renderPasswordError = formik.touched.password && formik.errors.password && <samp style={{color:'red'}}>{formik.errors.password}</samp>
  return (
    <div>
      <h2>User Sing up Page</h2>
      <form action='' onSubmit={formik.handleSubmit}>
        <div>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' value={name} placeholder='Enter your name' onChange={formik.handleChange}/>
                {renderNameError}
            </div>    
            <div>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' value={email} placeholder='Enter Email' onChange={formik.handleChange}/>
                {renderEmailError}
            </div>
            <div>
                <label htmlFor='phone'>Phone</label>
                <input type='text' name='phone' id='phone' value={phone} placeholder='Enter Phone'onChange={formik.handleChange}/>
                {renderPhoneError}
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' value={password} placeholder='Enter password' onChange={formik.handleChange} />
                {renderPasswordError}
            </div>
            <div>
                <button type='submit'>Singup</button>
            </div>    
        </div>
      </form>
    </div>
  )
}

export default Singup;
