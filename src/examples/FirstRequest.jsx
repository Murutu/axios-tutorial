/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import axios from "axios";

const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
    const fetchData = async () => {
        try {
            const response = await axios(url);
            console.log(response);
            const data = response.data;
            console.log(data);
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
    <div>FirstRequest</div>
    )
}

export default FirstRequest;

/*
1st
const url = ""

const fetchData = async() => {
    try {
        const response = await axios (url);
        console.log(response)
    }catch(error) {
        console.log(error.response);
    }
}

useEffect(() => {
    fetchData();
}, [])

every time you console.log() the product array will always be located in the data

const fetchData = async () => {
    const response = await axios(url);
    const data = response.data;
    console.log(data);
}
*/