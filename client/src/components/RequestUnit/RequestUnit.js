import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row' ;
import 'bootstrap/dist/css/bootstrap.min.css';

function RequestUnit() {
  return (
    <div  style={{justifyContent:"space-around", fontWeight:"bolder", fontSize:"larger"}}>
      <div style={{color:"#1A626D"}}> 
    <Form>
      <h1 style={{textAlign:"center"}}>Listers information</h1>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="phone number" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Send to me" />
      </Form.Group>
      
    </Form>
    <Form style={{color:"#1A626D"}}>
        <h1 style={{textAlign:"center"}}>Renter's information</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="email" placeholder="Username" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridUnitNumber">
          <Form.Label>Unit Number</Form.Label>
          <Form.Control type="password" placeholder="Unit Number" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridlocation">
          <Form.Label>Location</Form.Label>
          <Form.Control type="password" placeholder="Location" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="email" placeholder="Phone Number" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="password" placeholder="Category" />
        </Form.Group>
      </Row>
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
