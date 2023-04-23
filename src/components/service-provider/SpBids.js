import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyAxios from "../../custom-config/MyAxios";

export default function SpBids() {

    let navigate = useNavigate();
    
    let [bids, setBids] = useState([]);

    useEffect(() => {
        let bearertoken = localStorage.getItem("bearertoken");
        if (bearertoken === null) navigate("/");

        MyAxios.get('/serviceprovider/bids', {
            headers: {
                Authorization: bearertoken
            }
        })
            .then((response) => {
                setBids(response.data)
            })

            .catch((err) => {
                console.error(err.response.data)
                navigate("/")
            })
    }, [navigate])

    return (
        <div>
            <h1 className="text-center">YOUR BIDS</h1>

            <br />

            <div className="logindiv p-3 bg-secondary position-relative">
                <Link className="btn btn-dark" to={"/spdashboard"}>Back</Link>
                {
                    bids.map((bid)=>{
                        return <div key={bid.bidId} className="card my-2">
                        <div className="card-body">
                            <h4 className="card-title">{bid?.bidId}</h4>
                            <p>
                                Amount : {bid?.amount},
                                <br />
                                Note : {bid?.note}
                                <br />
                                Is Accepted? {bid.accepted?<>Yes</>:<>No</>}
                            </p>
                        </div>
                    </div>
                    })
                }


            </div>
        </div>
    )
}