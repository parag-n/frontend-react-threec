import axios from "../../custom-config/MyAxios";
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {

    let navigate = useNavigate()
    let [user, setUser] = useState();

    useEffect(() => {

        let bearertoken = localStorage.getItem("bearertoken")

        if (bearertoken === null) navigate("/")

        axios.get(`/consumer/consumer`, {
            headers: {
                Authorization: bearertoken
            }
        })
            .then((response) => {
                setUser({ ...response?.data })
                console.log(response.data)
            })
            .catch((err)=>{
                navigate("/spdashboard")
                console.log(err.response.data);
            })

    }, [navigate])


    return (
        <div className="banner-img one p-4">
            <h1 className="text-center">YOUR PROFILE</h1>
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
        </div>
    )
}