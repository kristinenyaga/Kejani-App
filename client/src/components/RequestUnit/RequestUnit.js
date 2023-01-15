import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../context/user';
import { useContext } from 'react';

function RequestUnit({requestedunit}) {
  console.log(requestedunit)
  const { user } = useContext(UserContext);
  return (
    <div  style={{justifyContent:"space-around", fontWeight:"bolder", fontSize:"larger"}}>
      <div style={{color:"#1A626D"}}> 
    <Form>
      <h1 style={{textAlign:"center"}}>Lister information</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label style={{color:"#1A626D"}}>Name</Form.Label>
        <Form.Control type="text" placeholder="Name"  value={requestedunit.user.username}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label style={{color:"#1A626D"}}>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" value={requestedunit.user.phone_number}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:"#1A626D"}}>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" value={requestedunit.user.email}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Send to me" />
      </Form.Group>
      
    </Form>
    <Form style={{color:"#1A626D"}}>
        <h1 style={{textAlign:"center"}}>Renter's information</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUsername">
          <Form.Label style={{color:"#1A626D"}}>Username:</Form.Label>
          <Form.Control style={{ color: "red" }}  type="text" placeholder="Username" value={user.username} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridUnitNumber">
          <Form.Label style={{color:"#1A626D"}}>Unit Number</Form.Label>
          <Form.Control type="text" style={{ color: "red" }} placeholder="Unit Number" value={requestedunit.unit_number} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label style={{color:"#1A626D"}}>Email</Form.Label>
          <Form.Control style={{ color: "red" }}  type="email" placeholder="Email" value={user.email} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridlocation">
          <Form.Label style={{color:"#1A626D"}}>Apartment Location</Form.Label>
          <Form.Control type="text" style={{ color: "red" }} placeholder="Location" value={requestedunit.apartment.location} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPhoneNumber">
          <Form.Label style={{color:"#1A626D"}}>Phone Number</Form.Label>
          <Form.Control style={{ color: "red" }}  type="text" placeholder="Phone Number" value={user.phone_number} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCategory">
          <Form.Label style={{color:"#1A626D"}}>Category</Form.Label>
          <Form.Control type="text" style={{ color: "red" }} placeholder="Category" value={requestedunit.category} />
        </Form.Group>
      </Row>
      <h4>Do you need assisstance in moving or cleaning?</h4>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Movers" />
      </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Cleaners" />
      </Form.Group>

      <Button  onClick={() => alert('Details successfully submitted')} variant="primary" style={{backgroundColor:"#1A626D", marginLeft:"600px"}} type="submit">
        Submit
      </Button>
    </Form>
    </div>
    <div>
      
    </div>
    </div>
  );
}

export default RequestUnit;
