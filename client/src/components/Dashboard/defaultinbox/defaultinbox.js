import AlertDialogSlide from "./changepending";
import DefaultMap from "./defaultmap";
import { useContext,useState } from 'react';
import CustomizedDialogs from "./requestedunit";
const Inbox = ({request}) => {
  const {category,unit_number,phone_number,email,location,status,unitid}=request
  const [open, setOpen] = useState(false);
  const[clicked,setClicked]=useState()
  function handleClick(){
    setOpen(true)
    setClicked(true)
  }
 function handleDelete(){
  fetch(`/requestunits/${request.id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        Accept:'application/json',
    }
})
.then((res) => res.json())
.then((data) => {
  window.alert("Data deleted successfully")
})
 }
  return (
    <div>
    <div className="w-[500px] bg-gray-50  mx-auto my-8 p-8 rounded-xl shadow-xl  pl-22"
    style={{fontFamily:'Montserrat'}}
    >
      <h1 className="text-xl font-green text-slate-900 text-center" style={{color:"#1A626D",margin:"0 auto"}} ></h1>
      <div className="flex flex-row gap-24">
        <div>
          <h5>contact details</h5>
          <p className="">
          <i class="fa-sharp fa-solid fa-envelope"></i>{email}
          </p>
          <p className="">
          <i class="fa-solid fa-phone"></i>{phone_number}
          </p>
          <p className="">
          Embu
          </p>
        </div>
        <div>
        <h5>unit details</h5>
        <p className="">
          Apartment:Elgon
          </p>
          <p className="">
          <i class="fa-solid fa-location-dot"></i>{location}
          </p>
          <p className="">
          Unit_no:{unit_number}
          </p>
          <p className="">
          {category}
          </p>
        </div>
      </div>
      <div className="flex gap-8 ">
        <button  className=" text-white px-8 py-2 font-black hover:scale-105 ease-out duration-500"
        style={{backgroundColor:"#1A626D"}} onClick={handleClick}>edit</button>
        <button style={{color:"#1A626D"}} onClick={handleDelete} className=" bg-white px-8 py-2 font-black hover:scale-105 ease-out duration-500">delete</button>
        <button style={{color:"#1A626D"}} className="  px-8 py-2 font-black hover:scale-105 ease-out duration-500">{status}...</button>
      </div>
      {clicked&&<AlertDialogSlide open={open} setOpen={setOpen} request={request}/>}
    </div>
    </div>
  );
}
export default Inbox;