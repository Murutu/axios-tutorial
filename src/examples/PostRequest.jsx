/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";

const url = "https://course-api.com/axios-tutorial-post";

const PostRequest = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, {name: name, email:email});
            console.log(response.data);
        } catch (error) {
            console.log(error.response);
        }
    }
    
    return (
    <section>
        <h2>post request</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    className=""
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="email">email</label>
                <input
                    type="email"
                    className=""
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    </section>
    )
}

export default PostRequest

/*
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post(url, {name: email: email})
    }catch(error) {

    }
}

whenever we do a post request we always have to specify
axios.post(url ,{name:name, email:email})
not axios.post(url, {name, email})
*/

