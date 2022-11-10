import { Alert, Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import PulseLoader from 'react-spinners/PulseLoader'
// import {useAlert} from 'react-alert'

const productInfo = {
  title: "",
  price: "",
  discountPercentage: "",
  rating: "",
  stock: "",
  brand:"",
  category: "",
  description: ""
}
const AddProductForm = ({setProducts,setOpen}) => {
  const [loading, setLoading]= useState(false)
  // const alert = useAlert()
  const [addProduct, setAddProduct] = useState(productInfo)
  const { title,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    description } = addProduct
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const[image, setImage] = useState("")
  const handleAddressChange = (e) => {
    const { name, value } = e.target
    setAddProduct({ ...addProduct, [name]: value })
  }

  const AddProductValidation = Yup.object({
    title: Yup.string().required("Title is required").min(3, "Minimum 3 letter enter"),
    price: Yup.number().required("Price is required").min(1, "Minimum 1 letter enter"),
    discountPercentage: Yup.number().required('Discount Percentage is required').min(1, "Minimum 1 letter enter"),
    rating: Yup.number().required("Rating is required").min(1, "Minimum 1 letter enter"),
    stock: Yup.number().required('Stock is required').min(1, "Minimum 1 letter enter"),
    brand: Yup.string().required("Brand is required").min(3, "Minimum 3 letter enter"),
    category: Yup.string().required("Category is required").min(3, "Minimum 3 letter enter"),
    description: Yup.string().required("Description is required").min(5, "Minimum 5 letter enter"),
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const AddProductSubmit = async () => {
     try {
          setLoading(true)
          const {data} = await axios.post(`https://dummyjson.com/products/add`, addProduct)
          setLoading(false)
          console.log(data)
          const newData = {...data, thumbnail: image}
          setProducts((prev)=>([newData,...prev ]))
          setOpen(false)

    } catch (error) {
      setLoading(false)
      setMessage("")
      setError(error.response?.data.message)
      console.log(error)
    }
  }
  
  const handleImages = (e) => {
   
    let files= Array.from(e.target.files)
    files.forEach((img) => {
      if(img.type !== "image/jpeg" &&
      img.type !== "image/png" &&
    img.type !== "image/webp" &&
    img.type !== "image/gif"){
        setError(`${img.name} File format is not supported`)
        // files = files.filter((item)=> item.name !== images.name)
        return
      }
      else if (img.size > 1024 * 1024) {
        setError(`${img.name} File size is too large`)
        return
      }
        const reader =new FileReader
        reader.readAsDataURL(img)
        reader.onload = (readerEvent) => {
            
            setImage(readerEvent.target.result)
        };
    });
    
}

  console.log(addProduct)
  return (
    <>
      <Box className='addressBox'>
        {
          error && <Alert severity='error'>{error}</Alert>
        }
        <Box>
          <Formik
            enableReinitialize
            initialValues={{
                title,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                category,
                description
            }}
            validationSchema={AddProductValidation}
            onSubmit={
              () => { AddProductSubmit() }
            }
          >
            {
              (formik) => (
                <Form>
                  
                  <Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='title'
                    label="Title"
                    id='title'
                    type="text"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name="title" />}
                    autoComplete="nope"
                  />

                <Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='price'
                    label="Price"
                    id='price'
                    type="number"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name="price" />}
                    autoComplete="nope"
                  />

<Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='discountPercentage'
                    label="Discount Percentage"
                    id='discountPercentage'
                    type="number"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name="discountPercentage" />}
                    autoComplete="nope"
                  />

<Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='rating'
                    label="Rating"
                    id='rating'
                    type="number"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name="rating" />}
                    autoComplete="nope"
                  />

<Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='stock'
                    label="Stock"
                    id='stock'
                    type="number"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name="stock" />}
                    autoComplete="nope"
                  />

<Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='brand'
                    label="Brand"
                    id='brand'
                    type="text"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name="brand" />}
                    autoComplete="nope"
                  />

<Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='category'
                    label="Category"
                    id='category'
                    type="text"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name="category" />}
                    autoComplete="nope"
                  />
                  <Field as={TextField}
                    margin='normal'
                    fullWidth
                    name='description'
                    label="Description"
                    id='description'
                    type="text"
                    size='small'
                    onChange={handleAddressChange}
                    helperText={<ErrorMessage name='description' />}
                  />
                  <Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
    onChange={handleImages}
  />
</Button>



                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}>{loading ? <PulseLoader color='#fff' size={5}/> : "Submit"}</Button>
                </Form>
              )
            }
          </Formik>
        </Box>
      </Box>
      {/* {
                message && alert.success(message)
            } */}
    </>
  )
}

export default AddProductForm