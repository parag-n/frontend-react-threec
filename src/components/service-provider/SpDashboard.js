import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyAxios from "../../custom-config/MyAxios";

export default function SpDashboard(){

    let navigate = useNavigate()
    let [user, setUser] = useState();

    useEffect(() => {

        let bearertoken = localStorage.getItem("bearertoken")

        if (bearertoken === null) navigate("/")

        MyAxios.get(`/serviceprovider/serviceprovider`, {
            headers: {
                Authorization: bearertoken
            }
        })
            .then((response) => {
                setUser({ ...response?.data })
                // console.log(response.data)
            })
            .catch((err)=>{
                navigate("/")
                console.log(err.response.data);
            })

    }, [navigate])

    return(
        <div className="bg-secondary">
            <h4 className="text-center">Service Provider</h4>
            <table className="tctable">
                <tbody>
                    <tr>
                        <th>Name</th><td>{user?.fullname}</td>
                    </tr>
                    <tr>
                        <th>Phone</th><td>{user?.phone}</td>
                    </tr>
                    <tr>
                        <th>Email</th><td>{user?.email}</td>
                    </tr>
                    <tr>
                        <th>Role</th><td>{user?.role}</td>
                    </tr>
                    <tr>
                        <th>Userame</th><td>{user?.username}</td>
                    </tr>
                    <tr>
                        <th>Dummy Field</th><td>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</td>
                    </tr>
                    <tr>
                        <th>Password</th><td>********</td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                <Link to={"/spposts"} className="btn btn-dark m-1"> Show Active Posts</Link>
                <Link to={"/spbids"} className="btn btn-dark m-1"> Show my bids</Link>
                <Link to={"/spposts"} className="btn btn-dark m-1"> Show my works</Link>
            </div>
        </div>
    )
}