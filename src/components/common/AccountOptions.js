import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function AccountOptions() {

    let navigate = useNavigate();

    /**
     * When user clicks on logout, clear the localStorage and navigate to homepage
     */
    let handleLogout = () => {
        localStorage.clear();
        navigate("/")
    }

    return (
        <NavDropdown title="Account Options" id="Options" className="btn">

            <NavDropdown.Item href={"/userdashboard"} >  Your profile</NavDropdown.Item>

            <NavDropdown.Item href={"/useraddresses"} >Your address</NavDropdown.Item>

            <NavDropdown.Item href={"/userposts"} >Your posts</NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item onClick={handleLogout} >
                Logout
            </NavDropdown.Item>

        </NavDropdown>
    )
}