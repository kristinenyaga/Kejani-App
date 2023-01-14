import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function RequestUnit() {
  
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
  return (
   
    <div style={{display: 'flex',backgroungColor:"whitesmoke", flexDirection: 'column', padding: '1rem', color:"#1A626D" }}> 
    <form  ref={form} onSubmit={sendEmail}>
      <h2 style={{textAlign:"center"}}>Listers information</h2>
    <label>Name:</label>
    <br />
    <input   type="text"  name="lister_name" style={{border: '1px solid #ccc', width: '100vw',  padding: '0.5rem', fontSize: '1rem' }}/>
    <br />
    <label>Phone Number:</label>
    <br />
    <input type="text" name="lister_phone" style={{border: '1px solid #ccc',width: '100vw', padding: '0.5rem', fontSize: '1rem' }}/>
    <br />
    <label>Email:</label>
    <br />
    <input type="email" name="lister_email" style={{border: '1px solid #ccc',width: '100vw', padding: '0.5rem', fontSize: '1rem' }}/>
    <br />
    <label>Send to me </label>

    <input
    name="send_to"
        type="checkbox"
        
      />
      <h2 style={{textAlign:"center"}}>Renter's information</h2>
      <div>
    <label>Username:</label>
    <br />
    <input type="text"name="user_name" style={{border: '1px solid #ccc',width: '100vw', padding: '0.5rem', fontSize: '1rem' }}/>
    <br />
    <label>Unit number:</label>
    <br />
    <input type="text" name="unit_number" style={{border: '1px solid #ccc',width: '100vw', padding: '0.5rem', fontSize: '1rem' }}/>
    <br />
    </div>
    <br />
    <div >
    <label>Email:</label>
    <br />
    <input type="email"  name="user_email"  style={{border: '1px solid #ccc',width: '100vw', padding: '0.5rem', fontSize: '1rem' }}/>
    <br />
    <label>Location:</label>
    <br />
    <input type="text" name="user_location" style={{border: '1px solid #ccc',width: '100vw', padding: '0.5rem', fontSize: '1rem' }}/>
    <br />

    </div>
    <div >
    <br />
    <label>Phone Number:</label>
    <br />
    <input type="text" name="user_phone" style={{border: '1px solid #ccc',width: '100vw', padding: '0.5rem', fontSize: '1rem' }} />
    <br />
    <label>Category:</label>
    <br />
    <input type="text" name="user_category" style={{border: '1px solid #ccc',width: '100vw', padding: '0.5rem', fontSize: '1rem' }} />
    <br />
    </div>
    <label>Movers</label>
    <input
    name="movers"
        type="checkbox"
       
      />
      <label>Cleaners</label>
    <input
    name="cleaners"
        type="checkbox"
       
      />
       <br />
    <input style={{background: '#1A626D', color: '#fff',width:"100vw", padding: '0.5rem', fontSize: '1rem' }} type="submit" value="Send" />
    </ form>
    </div>
   
  
  
  
  );
}

export default RequestUnit;
