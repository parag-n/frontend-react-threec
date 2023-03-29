import axios from "../../custom-config/MyAxios";
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {

    let navigate = useNavigate()
    let [user, setUser] = useState();

    useEffect(() => {

        let bearertoken = localStorage.getItem("bearertoken")

        // if (bearertoken === null) navigate("/")

        axios.get(`/consumer/consumer`, {
            headers: {
                Authorization: bearertoken
            }
        })
            .then((response) => {
                setUser({ ...response?.data })
                console.log(response.data)
            })
            .catch(console.log)

    }, [navigate])


    return (
        <div className="bannerimg one p-4 text-center">
            <h1 className="">YOUR PROFILE</h1>
            {user?.fullname}
        </div>
    )
}