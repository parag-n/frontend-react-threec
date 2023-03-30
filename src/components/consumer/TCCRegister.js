import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyAxios from "../../custom-config/MyAxios";


export default function TCCRegister(props) {

  // navigate hook to navigate to the desired component
  let navigate = useNavigate();

  let handleFailure=props.handleFailure;
  let setShowLoader=props.setShowLoader;

  // keeping the consumer in state
  let [consumer, setConsumer] = useState();

  // callback function to populate the consumer object whenever an input is given
  let handleInput = (e) => {
    setConsumer({ ...consumer, [e.target.name]: e.target.value })
  }

  // callback function to send and fetch the data from the server
  let handleSubmit = async (e) => {
    
    setShowLoader(true);
    
    // prevents the data from being shown in the url
    e.preventDefault();

    // checking the consumer details entered by the user
    console.log(consumer);
    
    // using axios to post the consumer details
    try {
      const response = await MyAxios.post("/consumer/consumer", consumer);
      console.log(response?.data);
      navigate("/login");

    } catch (err) {
      console.log(err?.response?.data);
      handleFailure(true);
      setShowLoader(false);
      window.scrollTo(0,0);
    }

  }


  return (
    <div className="container p-4 rounded-5 bg-secondary" style={{ maxWidth: "40rem" }}>

      <h2 className="mb-3 text-center" >CONSUMER REGISTRATION</h2>

      <form onSubmit={handleSubmit} className="needs-validation">

        <div className="row">

          <div className="mb-3 col">
            <label htmlFor="fullname" className="form-label">Name</label>
            <input type="text" className="form-control" name="fullname" id="fullname" onChange={handleInput} required></input>
            <div className="valid-feedback">Looks good!</div>
          </div>

        </div>

        <div className="row">
          <div className="mb-3 col">
            <label htmlFor="phone" className="form-label">Mobile</label>
            <input type="text" className="form-control" name="phone" id="phone" onChange={handleInput} required></input>
          </div>


          <div className="mb-3 col">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" id="email" onChange={handleInput} required></input>
          </div>

        </div>

        <div className="row">

          <div className="mb-3 col">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" name="username" id="username" onChange={handleInput} required></input>
          </div>

          <div className="mb-3 col">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" id="password" onChange={handleInput} required></input>
          </div>

        </div>


        <button type="submit" className="btn btn-success m-2">Register</button>
        <button type="reset" className="btn btn-danger m-2">Reset</button>

      </form>
    </div>
  )
}