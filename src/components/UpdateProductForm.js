import { Alert, Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

// import {useAlert} from 'react-alert'


const UpdateProductForm = ({setProducts,setOpen ,id, prod}) => {

  const productInfo = {
    title: prod.title,
    price: prod.price,
    discountPercentage: prod.discountPercentage,
    rating: prod.rating,
    stock: prod.stock,
    brand:prod.brand,
    category: prod.category,
    description: prod.description
  }
  // const alert = useAlert()
  const [UpdateProduct, setUpdateProduct] = useState(productInfo)
  const { title,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    description } = UpdateProduct
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const handleUpdateressChange = (e) => {
    const { name, value } = e.target
    setUpdateProduct({ ...UpdateProduct, [name]: value })
  }

  const UpdateProductValidation = Yup.object({
    title: Yup.string().required("Title is required").min(3, "Minimum 3 letter enter"),
    price: Yup.number().required("Price is required").min(1, "Minimum 1 letter enter"),
    discountPercentage: Yup.number().required('Discount Percentage is required').min(1, "Minimum 1 letter enter"),
    rating: Yup.number().required("Rating is required").min(1, "Minimum 1 letter enter"),
    stock: Yup.number().required('Stock is required').min(1, "Minimum 1 letter enter"),
    brand: Yup.string().required("Brand is required").min(3, "Minimum 3 letter enter"),
    category: Yup.string().required("Category is required").min(3, "Minimum 3 letter enter"),
    description: Yup.string().required("Description is required").min(5, "Minimum 5 letter enter"),
  })

  
  const UpdateProductSubmit = async () => {
     try {
          const {data} = await axios.put(`https://dummyjson.com/products/${id}`, UpdateProduct)
          console.log(data)
          setProducts((prev)=>([data,...prev ]))
          setOpen(false)

    } catch (error) {
      setMessage("")
      setError(error.response?.data.message)
      console.log(error)
    }
  }

  console.log(UpdateProduct)
  return (
    <>
      <Box className='UpdateressBox'>
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
            validationSchema={UpdateProductValidation}
            onSubmit={
              () => { UpdateProductSubmit() }
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
                    onChange={handleUpdateressChange}
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
                    onChange={handleUpdateressChange}
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
                    onChange={handleUpdateressChange}
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
                    onChange={handleUpdateressChange}
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
                    onChange={handleUpdateressChange}
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
                    onChange={handleUpdateressChange}
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
                    onChange={handleUpdateressChange}
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
                    onChange={handleUpdateressChange}
                    helperText={<ErrorMessage name='description' />}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}>Submit</Button>
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

export default UpdateProductForm