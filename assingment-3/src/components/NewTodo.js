import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const NewTodo = (props) => {
  const formik = useFormik({
   initialValues:{
    title:'',
    desc:''
   },
   validationSchema:yup.object({
    title:yup.string().required().min(10, "Title must have atleast 10 characters"),
    desc:yup.string().required()
   }),
   onSubmit: (values,{resetForm}) =>{
    props.onAddTodo(values);
    resetForm({values:''})
   }
  })

  const renderTitle = formik.touched.title && formik.errors.title && <span style={{color:"red"}}>{formik.errors.title}</span>
  const renderDesc = formik.touched.desc && formik.errors.desc && <span style={{color:"red"}}>{formik.errors.desc}</span>
  return (
    <div>
        <h1>Collect Data From a Form</h1>
        <form action='' onSubmit={formik.handleSubmit}> 
            <div>
                <label htmlFor='title'> title</label>
                <input type='title' name='title' id='title' onChange={formik.handleChange} value={formik.values.title} placeholder='Enter Title'/>
                {renderTitle}
            </div>
            <div>
                <label htmlFor='desc'>Description</label>
                <textarea type='desc' name='desc' id='desc' onChange={formik.handleChange} value={formik.values.desc} placeholder='Enter description'/>
                {renderDesc}
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>    
  )
}

export default NewTodo;
