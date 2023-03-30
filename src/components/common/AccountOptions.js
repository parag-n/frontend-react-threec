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
        <NavDropdown title="Account Options" id="collasible-nav-dropdown" collapseonselect="true">

            <NavDropdown.Item href="/frontend-react-threec/userdashboard" >
                Your profile
            </NavDropdown.Item>

            <NavDropdown.Item href="/frontend-react-threec/useraddresses">
                Your addresses
            </NavDropdown.Item>

            <NavDropdown.Item href={"/frontend-react-threec/userposts"} >
                Your posts
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item onClick={handleLogout} >
                Logout
            </NavDropdown.Item>

        </NavDropdown>
    )
}