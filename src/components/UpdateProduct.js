import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import UpdateProductForm from './UpdateProductForm';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateProduct({setProducts, id,prod}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <DriveFileRenameOutlineIcon  onClick={handleClickOpen}/>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Update a new product"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <UpdateProductForm setProducts={setProducts} setOpen={setOpen} id={id} prod={prod}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}