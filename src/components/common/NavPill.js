import { Nav } from "react-bootstrap";

export default function NavPill(props) {

    let handlePill=props.handlePill;

    return (
        <Nav justify variant="pills"  defaultActiveKey={"consumer"} className="p-2 bg-dark rounded-2">
            <Nav.Item>
                <Nav.Link name="consumer" eventKey="consumer" className="text-light rounded-5" onClick={handlePill}>CONSUMER</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link name="service provider" eventKey="service-provider" className="text-light  rounded-5" onClick={handlePill}>SERVICE PROVIDER</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}