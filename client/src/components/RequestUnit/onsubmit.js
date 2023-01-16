import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function AlertDialogSlide({open,setOpen}) {
  const navigate=useNavigate()
  console.log(open)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    navigate('/movers')
  };


  return (
    <div>
      
      {open&&
       <Dialog
       open={open}
       TransitionComponent={Transition}
       keepMounted
       onClose={handleClose}
       aria-describedby="alert-dialog-slide-description"
     >
       <DialogTitle>{`Success Message!!`}</DialogTitle>
       <DialogContent>
         <DialogContentText id="alert-dialog-slide-description">
           Your details have been submitted successfully
         </DialogContentText>
       </DialogContent>
       <DialogActions>
         <Button onClick={handleClose}>logout</Button>
         <Button onClick={handleClose}>Proceed</Button>
       </DialogActions>
     </Dialog>}
     
    </div>
  );
}