import { Link } from "react-router-dom";

export default function UserPosts(){
    return(
        <div className="four p-4 text-center">
            
            <h1 className="">YOUR POSTS</h1>
            
            <br/>
            
            <Link to={"/newpost"} className="btn btn-success">Add new</Link>
        
        </div>
    )
}