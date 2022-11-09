import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useState } from 'react';


export default function DeleteDialog({products,setProducts,id}) {
  const [open, setOpen] = useState(false);
  const [deletedDocument, setDeletedDocument] = useState(products)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
         const {data} = await axios.delete(`https://dummyjson.com/products/${id}`)
         console.log(data)
         setDeletedDocument((prev)=>([...prev, data]));
         const newItems = products.filter((item)=> item.id != id)
        setProducts(newItems)
         setOpen(false)

   } catch (error) {
     setMessage("")
     setError(error.response?.data.message)
     console.log(error)
   }
 }
console.log(deletedDocument)
 

  return (
    <div>

      <DeleteIcon   onClick={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Please Confirm?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you realy want to delete, Once deleted data will permanently be lost
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}