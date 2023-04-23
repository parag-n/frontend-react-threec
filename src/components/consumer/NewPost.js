import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MyAxios from "../../custom-config/MyAxios"
import { Alert } from "react-bootstrap";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function NewPost() {

    // method to navigate user to another component
    let navigate = useNavigate();

    let [showLoader, setShowLoader] = useState(false);
    let [showAlert, setShowAlert] = useState(false)

    // storing list of categories in state
    let [categories, setCategories] = useState([]);

    // storing list of addresses in state
    let [addresses, setAddresses] = useState([])

    // keeping almost final post in state to use it in final post object
    let [post, setPost] = useState({});

    // storing expertiseId in state for using it in the dummy post
    let [expertiseId, setExpertiseId] = useState();

    // storing addressId in state for using it in the dummy post
    let [addressId, setAddressId] = useState();

    // storing date in state to parse it
    let [date, setDate] = useState('');

    // creating a post template to use it in json
    let templatePost = {
        category: {
            expertiseId
        },
        address: {
            addressId
        },
        date
    }

    useEffect(() => {;

        let bearertoken=localStorage.getItem("bearertoken")
        if(bearertoken===null) navigate("/");
        // fetching all the categories as soon as the component is mounted
        MyAxios.get(`/expertise/expertises`)
            .then(
                (response) => {
                    setCategories(response.data)
                })

            // registering callback function for when the promise is rejected
            .catch(() => {
                setCategories([])
            })


        // fetching all the addresses of the consumer
        MyAxios.get(`/address/addresses`,
        {
            headers:{
                Authorization:bearertoken
            }
        }
        )
            .then(
                (response) => {
                    console.log(response.data)
                    setAddresses(response.data)
                })

            // registering callback function for when the promise is rejected
            .catch(() => {
                setAddresses([])
            })
    }, [navigate])



    // callback function to store input in the post object
    let handleInput = (e) => {
        setPost({ ...post, ...templatePost, [e.target.name]: e.target.value })
        // console.log(e.target.value)
        // console.log(post)
    }

    // callback function to store date when user changes it
    let handleDate = ((e) => {
        // console.log(e.target.value)
        console.log(Date.parse(e.target.value))
        setDate(Date.parse(e.target.value))
        // console.log(typeof (Date.parse(e.target.value)))
        // console.log(Date.now())
    })

    // callback function to set the expertise when a category is selected
    let handleCategorySelect = (e) => {
        setExpertiseId(e.target.value);
        // console.log(post)
    }

    // callback function to set the address when an address is selected
    let handleAddressSelect = (e) => {
        setAddressId(e.target.value);
    }

    // callback function to create a new post and post it to server
    let handleSubmit = async (e) => {

        setShowLoader(true);

        let bearertoken=localStorage.getItem("bearertoken")
        if(bearertoken===null) navigate("/");

        e.preventDefault();

        // creating the final post object
        setPost({ ...post, ...templatePost })

        // sending the final post object to the server
        try {
            const response = await MyAxios.post("/post/post", post,
            {
                headers:{
                    Authorization:bearertoken
                }
            }
            )
            console.log(response?.data);
            navigate("/userposts");
        } catch (err) {
            setShowAlert(true);
            setShowLoader(false);
            window.scrollTo(0, 0)
        }
    }

    return (
        <>
            {showLoader
                ?
                <div className="bg-dark w-100 h-100 z-3 position-absolute justify-content-center " >
                    <ScaleLoader color="#36d7b7" loading={showLoader} className=" position-absolute translate-middle top-50 start-50" />
                </div>
                :
            <div className="container m-4 mx-auto p-3 rounded-3" style={{ width: "fit-content", maxWidth: "23rem" }}>

                {showAlert ? <Alert variant="danger" className="text-center" onClose={() => setShowAlert(false)} dismissible >
                    <strong>Uh oh! Something went wrong!</strong>
                </Alert> : <></>}

                <div className="container m-4 mx-auto bg-light p-3 rounded-3" style={{ width: "fit-content", maxWidth: "23rem" }}>


                    <h1 className="text-center">New Post</h1>
                    <form onSubmit={handleSubmit} className="m-3">
                        <div className="row d-flex flex-row">

                            {/* Title */}
                            <div className="card text-white bg-dark mb-2" style={{ maxWidth: "23rem" }}>
                                <div className="card-header text-center">Title</div>
                                <input className="form-control mb-3" autoFocus placeholder="What do you need help with?" type="text" name="title" id="title" onChange={handleInput} required style={{ maxWidth: "23rem" }}></input>
                            </div>

                            {/* Category */}
                            <div className="card text-white bg-dark mb-2" style={{ maxWidth: "23rem" }}>
                                <div className="card-header text-center">Category</div>
                                <select className="form-control form-select form-select-sm mb-3" name="category" defaultValue={88888} onChange={handleCategorySelect} required>
                                    <option className="text-center" value={88888} disabled>-- select category --</option>
                                    {
                                        categories.map((cat) => {
                                            return <option key={cat.expertiseId} value={cat.expertiseId}>{cat.name}</option>
                                        })
                                    }
                                </select>

                            </div>

                            {/* Addresses */}
                            <div className="card text-white bg-dark mb-2" style={{ maxWidth: "23rem" }}>
                                <div className="card-header text-center">Address</div>
                                <select className="form-control form-select form-select-sm mb-3" name="address" defaultValue={9999} onChange={handleAddressSelect} required>
                                    <option className="text-center" value={9999} disabled>-- select address --</option>

                                    {
                                        addresses.map((add) => {
                                            return <option key={add.addressId} value={add.addressId}>{add.details + ", " + add.city + " - " + add.pincode}</option>
                                        })
                                    }
                                    {/* <option className=""><a href="/newaddress">New</a></option> */}
                                </select>
                            </div>

                            {/* Date and time */}
                            <div className="card text-white bg-dark mb-2" style={{ maxWidth: "23rem" }}>
                                <div className="card-header text-center">Date and Time</div>
                                <input className="form-control mb-3" name="servicedate" id="servicedate" type="datetime-local" onChange={handleDate} required style={{ maxWidth: "23rem" }}></input>
                            </div>

                            {/* Description */}
                            <div className="card text-white bg-dark mb-2" style={{ maxWidth: "23rem" }}>
                                <div className="card-header text-center">Description</div>
                                <textarea className="form-control mb-3" placeholder="Please describe the problem in a few words.."
                                    rows="3" name="description" id="description" onChange={handleInput}
                                    required style={{ maxWidth: "23rem" }}></textarea>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="d-flex flex-row">
                            <button type="submit" className="btn btn-success me-2">Submit</button>
                            <button type="reset" className="btn btn-danger">Reset</button>
                        </div>
                    </form>
                </div>
            </div>}
        </>
    )
}