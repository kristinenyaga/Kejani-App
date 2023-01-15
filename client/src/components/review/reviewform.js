import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Form from 'react-bootstrap/Form';
import { useState,useContext } from 'react';
import { UserContext } from '../context/user';

function ReviewForm({unit}) {
  const[errors,setErrors]=useState()
  const { user} = useContext(UserContext);
  const [description,setDescription]=useState('')
    const handleSubmit = (e) => {

      e.preventDefault();
  fetch('/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
          description:description,
          user_id:user.id,
          unit_id:unit.id

      })
  })
  .then((r) => {
    if (r.ok) {
      r.json().then((review) =>{
      console.log(review)
      setDescription('')
      }
      );
    } else {
    r.json().then((err) => alert(err.errors));
    }
  });

  }
    
  return (
    <Form onSubmit={handleSubmit}>
        <h1>Review form</h1>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User</Form.Label>
        <Form.Control style={{ color: "red" }} type="text" placeholder="username" value={user.username} disabled/>
        <Form.Text className="text-muted">
          Your review remains anonymous
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="leave a review" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
     
      <Button variant="contained"  type="submit" endIcon={<SendIcon />}>
        Send
      </Button>
      
     
    </Form>
  );
}

export default ReviewForm;