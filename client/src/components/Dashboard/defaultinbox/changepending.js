import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Form from 'react-bootstrap/Form';
import CustomizedDialogs from './requestedunit';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function AlertDialogSlide({open,setOpen,request}) {
  const [status, setStatus] = React.useState('');
  const [clicked, setClicked] = React.useState('');
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleChange = (event) => {
    setStatus(event.target.value);
    console.log(status)
  };
  const navigate=useNavigate()
  const handleCancel = () => {
    setOpen(false);
  };
  const handleUnit = () => {
    setOpenDialog(true);
    setClicked(true)
    console.log(openDialog)
  };
  const handleClose = () => {
    setClicked(true)
    setOpenDialog(true)
      fetch(`/requestunits/${request.id}`, {
          method: 'PATCH',
          headers: {
              'Content-Type': 'application/json',
              Accept:'application/json',
          },
          body: JSON.stringify({
              status:status
          })
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error)
        } else {
          console.log(data)
          setClicked(true)
          setOpenDialog(true)
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
       <DialogTitle>{}</DialogTitle>
       <DialogContent>
         <DialogContentText id="alert-dialog-slide-description">
           Change status of the request
         </DialogContentText>
         <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label"></InputLabel>
        <Form.Control
        type="text"
        placeholder="Disabled input"
        aria-label="Disabled input example"
        disabled
        readOnly
        value={request.username}
      />
      <br />
        <Form.Select aria-label="Default select example"
        value={status}
        onChange={handleChange}
        placeholder="status">
      <option disabled >Status</option>
      <option value="pending">Pending</option>
      <option value="approved">Approved</option>
      <option value="rejected">Rejected</option>
    </Form.Select>
      </FormControl>
       </DialogContent>
       <DialogActions>
         <Button onClick={handleCancel}>Cancel</Button>
         <Button onClick={handleClose}>Update</Button>
         <CustomizedDialogs  id={request.unitid}/>
       </DialogActions>
     </Dialog>}
    </div>
  );
}