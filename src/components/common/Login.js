import axios from "../../custom-config/MyAxios";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavPill from "./NavPill";

export default function Login() {

    let navigate = useNavigate();

    let [authRequest, setAuthRequest] = useState();

    let [showAlert, setShowAlert] = useState(false)

    let [usertype, setUserType] = useState("consumer");

    let handlePill = (e) => { setUserType(e.target.name) }

    let handleInput = (e) => { setAuthRequest({ ...authRequest, [e.target.name]: e.target.value }) }

    let handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const response =await axios.post("/auth/authenticate", authRequest);

            console.log(response?.data)
            localStorage.setItem("bearertoken", `Bearer ${response?.data}`)
            usertype === "consumer" ? navigate("/userdashboard") : navigate("/spdashboard")
        } catch (err) {
            setShowAlert(true)
            console.log(err?.response?.data)
        }
    }

    return (
        <div className="logindiv">
            {showAlert ? <Alert variant="danger" className="text-center" onClose={() => setShowAlert(false)} dismissible >
                <strong>Invalid username or password!</strong>
            </Alert> : <></>}

            <div className="logindiv bg-secondary">

                <NavPill handlePill={handlePill} />

                <div className="container p-4" >

                    <h2 className="text-center pb-2">{usertype.toUpperCase()} LOGIN</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3 col">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" name="username" id="username" onChange={handleInput} required />
                        </div>

                        <div className="mb-3 col">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" name="password" id="password" onChange={handleInput} required />
                        </div>

                        <button type="submit" className="btn btn-success m-2">Login</button>
                        <button type="reset" className="btn btn-danger m-2" onClick={() => { setAuthRequest({}) }}>Reset</button>

                    </form>
                </div>
            </div>
        </div>
    )
}