import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyAxios from "../../custom-config/MyAxios";

export default function NewAddress(props) {

    // method to navigate user to another component
    let navigate = useNavigate();

    let [address, setAddress] = useState();

    let [showAlert, setShowAlert] = useState(false)

    // callback function to store input in the post object
    let handleInput = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value })
    }

    // callback function to post the address to the server
    let handleSubmit = async (e) => {
        e.preventDefault();

        console.log(address);

        try{
            const response=await MyAxios.post("/address/address", address)

            console.log(response?.data)
            navigate("/useraddresses");

        }catch(err){
            console.log(err?.response?.data)
            setShowAlert(true)
        }

    }


    return (
        <div className="container m-4 mx-auto p-3 bg-light rounded-3" style={{ maxWidth: "23rem" }}>
            
            {showAlert ? <Alert variant="danger" className="text-center" onClose={() => setShowAlert(false)} dismissible >
                <strong>Uh oh! Something went wrong!</strong>
            </Alert> : <></>}

            <h1 className="text-center">New Address</h1>
            <form onSubmit={handleSubmit} className="m-3">
                <div className="row d-flex flex-row">

                    <div className="card text-white bg-dark mb-2" style={{ maxWidth: "23rem" }}>
                        <div className="card-header text-center">Details</div>
                        <input className="form-control mb-3" placeholder="Tony Stark Mansion" type="text-area" name="details" id="details" onChange={handleInput} required style={{ maxWidth: "23rem" }}></input>

                    </div>

                    <div className="card text-white bg-dark mb-2" style={{ maxWidth: "23rem" }}>
                        <div className="card-header text-center">Locality</div>
                        <input className="form-control mb-3" placeholder="Point Dumme" type="text-area" name="locality" id="locality" onChange={handleInput} required style={{ maxWidth: "23rem" }}></input>

                    </div>

                    <div className="card text-white bg-dark mb-2" style={{ maxWidth: "23rem" }}>
                        <div className="card-header text-center">City</div>
                        <input className="form-control mb-3" placeholder="Malibu, CA" type="text-area" name="city" id="city" onChange={handleInput} required style={{ maxWidth: "23rem" }}></input>

                    </div>

                    <div className="card text-white bg-dark mb-2" style={{ maxWidth: "23rem" }}>
                        <div className="card-header text-center">Pincode</div>
                        <input className="form-control mb-3" placeholder="90263" type="Number" min={111111} max={999999} name="pincode" id="pincode" onChange={handleInput} required style={{ maxWidth: "23rem" }}></input>

                    </div>

                </div><div className="d-flex flex-row">
                    <button type="submit" className="btn btn-success me-2">Submit</button>
                    <button type="reset" className="btn btn-danger">Reset</button>
                </div>
            </form>

        </div>
    )
}