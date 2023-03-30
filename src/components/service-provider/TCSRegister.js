import axios from "../../custom-config/MyAxios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function TCSRegister(props) {

    let handleFailure = props.handleFailure;
    let setShowLoader = props.setShowLoader;

    // let link=useSelector((state)=>{console.log(state.serverlink);return state.serverlink})
    let [categories, setCategories] = useState([]);

    // fetching the expertises as soon as the component is mounted
    useEffect(() => {
        axios.get(`/expertise/expertises`)

            .then((response) => {
                setCategories(response.data)
                console.log(response.data)
            })

            .catch(() => { })
    }, [])



    // navigate hook to navigate to the desired component
    let navigate = useNavigate();

    // keeping the consumer in state
    let [SP, setSP] = useState({ expertise: [] });

    // let expertise=[]

    let handleCategorySelect = (e) => {
        let exp = {
            expertiseId: Number.parseInt(e.target.id)
        }
        if (e.target.checked) {
            console.log("checked");
            SP.expertise.push(exp);
            // console.log(expertise)
        }
        else {
            console.log("unchecked");
            SP.expertise.pop(exp);
            // console.log(expertise)
        }
    }

    // callback function to populate the consumer object whenever an input is given
    let handleInput = (e) => {
        setSP({ ...SP, [e.target.name]: e.target.value })
    }

    // callback function to send and fetch the data from the server
    let handleSubmit = async (e) => {

        setShowLoader(true);

        // prevents the data from being shown in the url
        e.preventDefault();

        // checking the consumer details entered by the user
        console.log(SP)

        // using axios to post the consumer details
        try {
            const response = await axios.post("/serviceprovider/serviceprovider", SP)
            console.log(response?.data)
            navigate("/login")
        } catch (err) {
            console.log(err?.response?.data);
            handleFailure(true);
            setShowLoader(false);
            window.scrollTo(0, 0);
        }

    }


    return (
        <div className="container p-4 rounded-5 bg-secondary" style={{ maxWidth: "40rem" }}>

            <h2 className="mb-3 text-center">SERVICE PROVIDER REGISTRATION</h2>

            <form onSubmit={handleSubmit} className="needs-validation">

                <div className="row">

                    <div className="mb-3 col">
                        <label htmlFor="fullname" className="form-label">Name</label>
                        <input type="text" className="form-control" name="fullname" id="fullname" onChange={handleInput} required></input>
                        <div className="valid-feedback">Looks good!</div>
                    </div>

                    <div className="mb-3 col">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" name="city" id="city" onChange={handleInput} required></input>
                    </div>

                </div>

                <div className="row">
                    <div className="mb-3 col">
                        <label htmlFor="phone" className="form-label">Mobile</label>
                        <input type="text" className="form-control" name="phone" id="phone" onChange={handleInput} required></input>
                    </div>


                    <div className="mb-3 col">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" id="email" onChange={handleInput} required></input>
                    </div>

                </div>

                <div className="row">

                    <div className="mb-3 col">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" name="username" id="username" onChange={handleInput} required></input>
                    </div>

                    <div className="mb-3 col">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="password" onChange={handleInput} required></input>
                    </div>

                </div>

                <div className="row d-flex flex-inline">
                    {

                        categories.map((cat) => {
                            return <div key={cat.expertiseId} className="form-check form-switch mb-3 col ms-3 mt-2">
                                <input className="form-check-input" type="checkbox" id={cat.expertiseId} onChange={handleCategorySelect} />
                                <label className="form-check-label" htmlFor={cat.expertiseId}>{cat.name}</label>
                            </div>

                        })
                    }
                </div>

                <button type="submit" className="btn btn-success m-2">Register</button>
                <button type="reset" className="btn btn-danger m-2">Reset</button>

            </form>
        </div>
    )
}