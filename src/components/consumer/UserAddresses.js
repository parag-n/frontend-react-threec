import { Link } from "react-router-dom";

export default function UserAddresses(){
    return(
        <div className="three p-4 text-center">
            
            <h1 className="">YOUR ADDRESSES</h1>
            
            <br/>
            
            <Link to={"/newaddress"} className="btn btn-success">Add new</Link>
        
        </div>
    )
}