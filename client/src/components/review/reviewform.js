import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Form from 'react-bootstrap/Form';
import React, {useState,useEffect} from 'react'

function ReviewForm( {user, UnitID, setUnitID} ) {
    console.log(user)
    console.log(UnitID)
    

    const [description, setDecsription] = useState();
    

  
    function handleSubmit(e){

      e.preventDefault();
      e.target.reset();
      fetch(`/reviews/${UnitID}`,{
        Method: 'POST',
        headers:{'Content-Type': 'application/json'},
        BODY: JSON.stringify({
          description: description,
          
      })
      })
      .then(res =>res.json()).then(r=>{
        console.log(r)
        resetField()
      })
    }

    function handleDecsription(e){
      setDecsription(e.target.value)
    }
     
    function resetField(){
      setDecsription('')
    }
      function getId(id){
        setUnitID(id)
      }
  return (
    <Form onSubmit ={handleSubmit}>
        {/* <h1>Review form</h1> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User</Form.Label>
        <Form.Control type="text" placeholder="userid" />
        <Form.Text className="text-muted">
          Your review remains anonymous
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Review</Form.Label>
        <Form.Control type="text" placeholder="leave a review"value={description} onChange={handleDecsription}/>
      </Form.Group>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Form>
  );
}

export default ReviewForm;