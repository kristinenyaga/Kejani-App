import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import InputGroup from 'react-bootstrap/InputGroup';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import {  Card } from 'antd';
import Form from 'react-bootstrap/Form';
const { Meta } = Card;
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
export default function CustomizedDialogs({id}) {
  const [expanded, setExpanded] = React.useState(false);
  const [unit, setUnit] = React.useState('');
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState(false);
  const [price, setPrice] = React.useState(false);
  const [image, setImage] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    fetch(`/units/${id}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          Accept:'application/json',
      },
  })
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      alert(data.error)
    } else {
      setUnit(data)
      console.log(data)
    }
  })
  .catch((error) => {
    console.log(error);
  });
  };
  const handleClose = () => {
    setOpen(false);
  };
  function handleClick(){
    fetch(`/units/${id}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
          Accept:'application/json',
      },
      body: JSON.stringify({
        occuppied:status,
        price:price,
        image_url:image
    })
  })
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      alert(data.error)
    } else {
      setUnit(data)
      console.log(data)
    }
  })
  setPrice('')
  setStatus('')
  setImage('')
  .catch((error) => {
    console.log(error);
  });
  }
  const handleStatus = (event) => {
    const value = event.target.value;
    setStatus(value);
    console.log(status)
  };
  const handleImage = (event) => {
    const value = event.target.value;
    setImage(value);
    console.log(image)
  };
  const handlePrice = (event) => {
    const value = event.target.value;
    setPrice(value);
    console.log(price)
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        change unit
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" className='text-center'onClose={handleClose}>
          Update Unit
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        avatar={
          <Avatar  aria-label="recipe">
           <i class="fa-solid fa-house-circle-check"></i>
          </Avatar>
        }
        title={unit.category}
        subheader={unit.unit_number}
      />
      <CardMedia
        component="img"
        height="194"
        image={unit.image_url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <i class="fa-solid fa-dollar-sign"></i>{unit.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {unit.occuppied}
        </Typography>
      </CardContent>
      <h5 className='text-center'>Update your Unit</h5>
      <Form.Select aria-label="Default select example" onChange={handleStatus}>
      <option disabled >Change to</option>
      <option value="vacant">Vacant</option>
      <option value="occuppied">Occuppied</option>
    </Form.Select>
      <Form.Control
        type="text"
        id="inputPassword5"
        placeholder='change image'
        onChange={handleImage}
      />
      <Form.Control
        type="text"
        id="inputPassword5"
        placeholder='change price'
        onChange={handlePrice}
      />
    <button onClick={handleClick} type='submit'>Submit</button>
    </Card>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}