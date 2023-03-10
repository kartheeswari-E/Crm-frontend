import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box'
import { useFormik } from 'formik';
import * as yup from 'yup';
import React ,{useEffect,useState}from 'react';
 import { useParams } from "react-router-dom"
const movieValidationSchema = yup.object({

    name:yup
        .string(),
         
    email:yup
    .string(),
    
    car_model:yup.
    string(),
   
    car_name:yup.
    string(),
    
    msg:yup.
    string()
    ,
    solution:yup.
    string(),
    createdAt:yup.
    string()
   ,
    updatedAt:yup.
    string()
    , 
    mentor:yup.
    string()

    
})
export function Edit_query() {
  const {id}=useParams();
const [query, setquery] = useState(null);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/doubt/${id}`)
      .then((data) => data.json())
      .then((mv) => setquery(mv));
  }, []);
  console.log(query);
 return query ? <EditMoviesForm query={query}/> : "loading";
  }
  export function EditMoviesForm({query}){
    const {id}=useParams();
    const { handleSubmit, values, handleChange, touched, handleBlur, errors } = useFormik({
        initialValues: {
            name:query.name ,
        email:query.email ,
        car_model:query.car_model,
        car_name:query.car_name,
        msg:query.msg,
        solution:query.solution ,
        createdAt:query.createdAt ,
        updatedAt:query.updatedAt ,
        mentor:query.mentor
        },
        validationSchema: movieValidationSchema,
        onSubmit: (editMovieList) => {
            console.log('onSubmit', editMovieList)
            EditMovie(editMovieList)
        }
    })
    const navigate = useNavigate()
    const EditMovie = (editMovieList) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/doubt/update/${query._id}`, {
            method: "PUT",
            body: JSON.stringify(editMovieList),
            headers: {
                "Content-Type": "application/json"
            },
        }).then(() => navigate("/admin"))
            .catch((n) => console.log('error occurred' + n))
    };
    return <>
        <Box onSubmit={handleSubmit} className="add-movie-form" component="form"  >
            <TextField
                name=" name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name ? errors.name : null}
                label="Name" variant="outlined" />


            <TextField
                name=" email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email ? errors.email : null}
                label="email" variant="outlined" />

            <TextField
                name=" car_model"
                value={values.car_model}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.car_model && errors.car_model}
                helperText={touched.car_model && errors.car_model ? errors.car_model : null}
                label="car_model" variant="outlined" />

            <TextField
                name="car_name"
                value={values.car_name}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.car_name && errors.car_name}
                helperText={touched.car_name && errors.car_name ? errors.car_name : null}
                label="car_name" variant="outlined" />
           <TextField
                name=" msg"
                value={values.msg}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.msg && errors.msg}
                helperText={touched.msg && errors.msg ? errors.msg : null}
                label="msg" variant="outlined" />
               
               <TextField
                name="solution"
                value={values.solution}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.solution && errors.solution}
                helperText={touched.solution && errors.solution ? errors.solution : null}
                label="solution" variant="outlined" />

<TextField
                name="mentor"
                value={values.mentor}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.mentor && errors.mentor}
                helperText={touched.mentor && errors.mentor ? errors.mentor : null}
                label="mentor" variant="outlined" />

<TextField
                name=" createdAt"
                value={values.createdAt}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.createdAt && errors.createdAt}
                helperText={touched.createdAt && errors.createdAt ? errors.createdAt : null}
                label="createdAt" variant="outlined" />

<TextField
                name=" updatedAt"
                value={values.updatedAt}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.updatedAt && errors.updatedAt}
                helperText={touched.updatedAt && errors.updatedAt ? errors.updatedAt : null}
                label="updatedAt" variant="outlined" />
            <Button type="Submit" variant="contained">Submit</Button>
        </Box>
    </>;
}

export default Edit_query