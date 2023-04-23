import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyAxios from "../../custom-config/MyAxios";

export default function SpPosts() {

    let navigate = useNavigate();

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        let bearertoken = localStorage.getItem("bearertoken");
        if (bearertoken === null) navigate("/");

        MyAxios.get('/post/posts/serviceprovider', {
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
        <div>
            <h1 className="text-center">YOUR POSTS</h1>

            <br />

            <div className="logindiv p-3 bg-secondary position-relative">
                <Link className="btn btn-dark" to={"/spdashboard"}>Back</Link>
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
                                <Link to={"/spbidonpost"} state={post.postId} className="btn btn-success">Bid now</Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}