import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyAxios from "../../custom-config/MyAxios";
import { BsFillPlusSquareFill } from "react-icons/bs"

export default function UserAddresses() {

    let navigate = useNavigate();

    let [addresses, setAddresses] = useState([]);

    useEffect(() => {
        let bearertoken = localStorage.getItem("bearertoken");
        if(bearertoken===null) navigate("/");

        MyAxios.get('/address/addresses', {
            headers: {
                Authorization: bearertoken
            }
        })
            .then((response) => {
                setAddresses(response.data)
            })

            .catch((err) => {
                console.error(err.response.data)
                navigate("/")
            })
    }, [navigate])

    return (
        <div className="three">

            <h1 className="text-center">YOUR ADDRESSES</h1>

            <br />
            <div className="logindiv p-3 bg-secondary position-relative">
                <Link to={"/newaddress"} className="position-absolute top-0 start-50 translate-middle btn btn-success">ADD NEW <BsFillPlusSquareFill color="#fff" size="2em" className="ms-2" /> </Link>
                {
                    addresses.map((address) => {
                        return <div key={address.addressId} className="card my-2">
                            <div className="card-body">
                                <h4 className="card-title">{address.pincode}</h4>
                                <p>
                                    {address.details},
                                    <br />
                                    {address.locality},
                                    <br />
                                    {address.city} - {address.pincode}
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}