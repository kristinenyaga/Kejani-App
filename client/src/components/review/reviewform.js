import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Form from 'react-bootstrap/Form';

function ReviewForm({user}) {
    console.log(user)
  return (
    <Form>
        <h1>Review form</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User</Form.Label>
        <Form.Control type="text" placeholder="username" />
        <Form.Text className="text-muted">
          Your review remains anonymous
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" placeholder="leave a review" />
      </Form.Group>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Form>
  );
}

export default ReviewForm;