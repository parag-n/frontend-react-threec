import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AccountOptions from "./AccountOptions";

export default function TCnavbar() {

    return (
        <div className="tcnavbar">

            <Navbar expand="md" collapseOnSelect>

                <Container >

                    <Link
                        to={"/"}
                        className="h5 link-dark"
                        style={{ textDecoration: "none", textAlign: "center" }}
                    >
                        Connect. Contact. Conduct.
                    </Link>

                    <Navbar.Toggle />

                    <Navbar.Collapse id="collapseOnSelect" className="justify-content-end">

                        <Nav>
                            <Link to="/">Home</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            <Nav.Item>
                                <AccountOptions></AccountOptions>
                            </Nav.Item>
                        </Nav>

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </div>
    )
}