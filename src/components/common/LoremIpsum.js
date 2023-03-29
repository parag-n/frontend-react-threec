import { Link } from "react-router-dom";

export default function LoremIpsum() {

    return (
        <>
            <h4 className="text-center">Welcome to 3C.</h4>
            <span className="text-center">
                <p>
                    A world class platform for people to connect and demand and supply services from each other.
                </p>

                <p>
                    Are you someone who is in need of some 'guy' to get things fixed?
                    Or are you the 'guy' who can get the things fixed?
                </p>
                <p>
                    We have got you covered.
                </p>
                <p>
                    <Link to={"/register"} className="btn btn-dark">Join us now</Link>
                </p>
            </span>
        </>
    )
}