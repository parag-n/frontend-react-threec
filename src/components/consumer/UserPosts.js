import { useEffect, useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import MyAxios from "../../custom-config/MyAxios";

export default function UserPosts() {
    let navigate=useNavigate();

    let [posts, setPosts]=useState([]);

    useEffect(() => {
        let bearertoken = localStorage.getItem("bearertoken");
        if(bearertoken===null) navigate("/");

        MyAxios.get('/post/posts/consumer', {
            headers: {
                Authorization: bearertoken
            }
        })
            .then((response) => {
                setPosts(response.data)
            })

            .catch((err) => {
                console.error(err.response.data)
                navigate("/")
            })
    }, [navigate])

    return (
        <div className="four">

            <h1 className="text-center">YOUR POSTS</h1>

            <br />
            <div className="logindiv p-3 bg-secondary position-relative">
                <Link to={"/newpost"}  className="position-absolute top-0 start-50 translate-middle btn btn-success">ADD NEW <BsFillPlusSquareFill color="#fff" size="2em" className="ms-2" /></Link>
                {
                    posts.map((post) => {
                        return <div key={post.postId} className="card my-2">
                            <div className="card-body">
                                <h4 className="card-title">{post.category.name}</h4>
                                <p>
                                    {post.title},
                                    <br />
                                    {post.description},
                                    <br />
                                    {post.date}
                                    <br />
                                    {post.address.city}
                                    <br />
                                    {post.status}
                                </p>
                                <Link to={"/showbids"} state={post.postId} className="btn btn-success">Show bids</Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}