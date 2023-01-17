import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { UserContext } from '../context/user';
import { useContext,useState } from 'react';
import AlertDialogSlide from './onsubmit';
import { maxWidth } from '@mui/system';
import UserNav from '../userspage/usernavbar';

function RequestUnit({requestedunit}) {
  const[submitted,setSubmitted]=useState()
  const [open, setOpen] = useState(false);
  console.log(requestedunit)
  const { user } = useContext(UserContext);
  const clickhandler = () => {
    window.location.href = "mailto:mail@example.com";
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kxwul7n', 'template_x0ge6mc', form.current, 'bZ5ufoi0zHdZ2MmFJ')
      .then((result) => {
          console.log(result.text);
          console.log("Message sent successfully")
      }, (error) => {
          console.log(error.text);
      });
  };
  function handleSubmit(e) {
    e.preventDefault()
    setOpen(true)
    setSubmitted(true)
   
    fetch('/requestunits', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            Accept:'application/json',
            
        },
        body: JSON.stringify({
        username: user.username,
        email: user.email,
        phone_number:user.phone_number,
        unit_number:requestedunit.unit_number,
        category:requestedunit.category,
        location:requestedunit.apartment.location,
        user_id:requestedunit.user.id
        })
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        alert(data.error)
      } else {
        console.log(data)

      }
    })
    .catch((error) => {
      console.log(error);
    });
    }
  return (
    <>
    <UserNav/>
    <div  style={{justifyContent:"space-around", fontWeight:"bolder", fontSize:"larger" ,maxWidth:"90vw" }} className='ml-5'>
      <div style={{color:"#1A626D"}}> 
      {/* <Mailto/> */}
      <Form ref={form} onSubmit={sendEmail}>
      <h1 style={{textAlign:"center",fontSize:"32px"}}>Lister information</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label style={{color:"#1A626D"}}>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="lister_name"  value={requestedunit.user.username}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label style={{color:"#1A626D"}}>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number"  name="lister_phone" style={{border: '1px solid #ccc',width: '90vw', padding: '0.5rem', fontSize: '1rem' }}  value={requestedunit.user.phone_number}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:"#1A626D"}}>Email</Form.Label>
        <Form.Control type="email" style={{border: '1px solid #ccc',width: '90vw', padding: '0.5rem', fontSize: '1rem' }} placeholder="Email" name="lister_email" value={requestedunit.user.email}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Send to me" />
      </Form.Group>
</Form >
    <Form style={{justifyContent:"space-around", fontWeight:"bolder", fontSize:"larger" ,margin:"0 auto"}}  className='m-auto items-center' onSubmit={handleSubmit}>
        <h1 style={{textAlign:"center",fontSize:"32px"}}>Renter's information</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUsername">
          <Form.Label style={{color:"#1A626D" }}>Username:</Form.Label>
          <Form.Control style={{ color: "red", border: '1px solid #ccc',width: '90vw', padding: '0.5rem', fontSize: '1rem'}}  type="text" placeholder="Username" value={user.username} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridUnitNumber">
          <Form.Label style={{color:"#1A626D"}}>Unit Number</Form.Label>
          <Form.Control type="text" style={{ color: "red",border: '1px solid #ccc',width: '90vw', padding: '0.5rem', fontSize: '1rem' }} placeholder="Unit Number" value={requestedunit.unit_number} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{color:"#1A626D"}}>Email</Form.Label>
          <Form.Control style={{ color: "red",border: '1px solid #ccc',width: '90vw', padding: '0.5rem', fontSize: '1rem' }}  type="email" placeholder="Email" value={user.email} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridlocation">
          <Form.Label style={{color:"#1A626D"}}>Apartment Location</Form.Label>
          <Form.Control type="text" style={{ color: "red",border: '1px solid #ccc',width: '90vw', padding: '0.5rem', fontSize: '1rem' }} placeholder="Location" value={requestedunit.apartment.location} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPhoneNumber">
          <Form.Label style={{color:"#1A626D"}}>Phone Number</Form.Label>
          <Form.Control style={{ color: "red",border: '1px solid #ccc',width: '90vw', padding: '0.5rem', fontSize: '1rem' }}  type="text" placeholder="Phone Number" value={user.phone_number} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCategory">
          <Form.Label style={{color:"#1A626D"}}>Category</Form.Label>
          <Form.Control type="text" style={{ color: "red",border: '1px solid #ccc',width: '90vw', padding: '0.5rem', fontSize: '1rem' }} placeholder="Category" value={requestedunit.category} />
        </Form.Group>
      </Row>
      <h4>Do you need assisstance in moving or cleaning?</h4>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Movers" />
      </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Cleaners" />
      </Form.Group>

      <Button   variant="primary" style={{backgroundColor:"#1A626D", marginLeft:"600px",width:"150px",border:"none"}} type="submit">
        Submit
      </Button>
      {submitted&&<AlertDialogSlide open={open} setOpen={setOpen}/>}
      
    </Form>
    </div>
    <div>
      
    </div>
    </div>
    </>
    
  );
}

export default RequestUnit;
