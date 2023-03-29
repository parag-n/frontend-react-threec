import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AccountOptions from "./AccountOptions";

export default function TCnavbar() {


    return (
        <div className="tcnavbar">

            <Navbar expand="md">

                <Container >

                    <Navbar.Brand href="/">

                        Connect. Contact. Conduct.

                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

                            <Nav.Item className="btn"><Link to={"/"}>Home</Link></Nav.Item>

                            <Nav.Item className="btn"><Link to={"/login"}>Login</Link></Nav.Item>

                            <Nav.Item className="btn"> <Link to={"/register"}>Register</Link> </Nav.Item>

                            <AccountOptions></AccountOptions>

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </div>
    )
}