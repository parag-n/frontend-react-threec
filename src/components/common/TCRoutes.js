import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage"
import Login from "./Login";
import Register from "./Register"
import UserDashboard from "../consumer/UserDashboard"
import SpDashboard from "../service-provider/SpDashboard"
import UserAddresses from "../consumer/UserAddresses";
import NewAddress from "../consumer/NewAddress";
import UserPosts from "../consumer/UserPosts";
import NewPost from "../consumer/NewPost";

export default function TCroutes() {

    return (
        <Routes>

            <Route path="/" element={<Homepage />} />
            
            <Route path="/frontend-react-threec" element={<Homepage />} />

            <Route path="/login" element={<Login />} />
            
            <Route path="/frontend-react-threec/login" element={<Login />} />

            <Route path="/register" element={<Register />} />
            
            <Route path="/frontend-react-threec/register" element={<Register />} />

            <Route path="/userdashboard" element={<UserDashboard />} />
            
            <Route path="/frontend-react-threec/userdashboard" element={<UserDashboard />} />

            <Route path="/useraddresses" element={<UserAddresses />} />
            
            <Route path="/frontend-react-threec/useraddresses" element={<UserAddresses />} />

            <Route path="/newaddress" element={<NewAddress />} />
            
            <Route path="/frontend-react-threec/newaddress" element={<NewAddress />} />

            <Route path="/userposts" element={<UserPosts />} />
            
            <Route path="/frontend-react-threec/userposts" element={<UserPosts />} />

            <Route path="/newpost" element={<NewPost />} />
            
            <Route path="/frontend-react-threec/newpost" element={<NewPost />} />

            <Route path="/spdashboard" element={<SpDashboard />} />
            
            <Route path="/frontend-react-threec/spdashboard" element={<SpDashboard />} />


        </Routes>
    )
}