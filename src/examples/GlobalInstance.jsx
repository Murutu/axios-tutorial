/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import {useEffect} from 'react';
import axios from "axios";
// eslint-disable-next-line no-unused-vars
const productsUrl = "https://course-api.com/react-store-products";
// eslint-disable-next-line no-unused-vars
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
    const fetchData = async () => {
        try {
            const resp1 = await axios(productsUrl);
            const resp2  = await axios(randomUserUrl);
            console.log(resp1)
        } catch (error) {}
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
    <div>GlobalInstance</div>
    )
}

export default GlobalInstance

/*
import {useEffect} from "react";

function App() {
    const fetchData = async () => {
        console.log("global")
    }

    useEffect(() => {
        fetchData()
    })

    return (
        <div></div>
    )
}

export default App;

There are downsides to using global instance
If we have something sensitive eg JSONWEBTOKEN we dont want to keep sending the servers
servers const randomURL/product
A possible fix is the custom instance

Any request we set up we will have Accept: application/json
bcz we set it up in the GlobalInstance
*/