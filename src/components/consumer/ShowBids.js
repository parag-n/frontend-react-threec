import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import MyAxios from "../../custom-config/MyAxios";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function ShowBids() {

    let location = useLocation();
    let navigate = useNavigate();
    let [bids, setBids] = useState([]);
    let i = 1;
    useEffect(() => {
        let bearertoken = localStorage.getItem("bearertoken");
        if (bearertoken === null) navigate("/");

        MyAxios.get("/bid/bids/" + location?.state, {
            headers: {
                Authorization: bearertoken
            }
        })
            .then((response) => {
                setBids(response.data);
                console.log(response.data)
            })

    }, [location, navigate])

    return (
        <div>
            <h1 className="text-center">Bids received on your post</h1>
            <table className="tctable">
                <thead>
                    <tr>
                        <th>Sr.No.</th><th>Service Provider</th><th>Amount</th><th>Note</th><th>Action   </th>
                    </tr>
                </thead>
                <tbody>
                    {

                        bids
                            ?
                            bids.map((bid) => {
                                return <tr key={bid.bidd}>
                                    <td>{i++}</td>
                                    <td>{bid.spName}</td>
                                    <td>{bid.amount}</td>
                                    <td>{bid.note}</td>
                                    <td></td>
                                </tr>
                            })
                            :
                            <tr>
                                <td>
                                    <ScaleLoader/>
                                </td>
                            </tr>
                    }
                </tbody>
            </table>

        </div>
    )
}