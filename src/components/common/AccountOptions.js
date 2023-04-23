import { NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

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
        <NavDropdown title="Account Options" 
        id="collasible-nav-dropdown" 
        collapseonselect="true"
        className="align-items-center">

            <Link className="btn btn-primary mb-2" to="/userdashboard" >
                Your profile
            </Link>

            <br></br>
            <Link className="btn btn-primary mb-2" to="/useraddresses">
                Your addresses
            </Link>

            <br></br>
            <Link className="btn btn-primary" to={"/userposts"} >
                Your posts
            </Link>

            <NavDropdown.Divider />

            <button onClick={handleLogout} >
                Logout
            </button>

        </NavDropdown>
    )
}