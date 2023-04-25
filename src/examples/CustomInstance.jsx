/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import {useEffect} from 'react'

import authFetch from '../axios/Custom';
import axios from 'axios';

const randomUserURL = "https://randomuser.me/api"

const CustomInstance = () => {

    const fetchData = async () => {
        try {
            const resp1 = await authFetch("/react-store-products");
            const resp2 = await axios(randomUserURL);
        } catch (error) {}
    } 

    useEffect(() => {
        fetchData()
    }, [])
    return (
    <div>CustomInstance</div>
    )
}

export default CustomInstance

/*
const resp1 = await authFetch(/react-store-products);
we type it like this because we have the baseURL in the axios folder which is
baseURL="https://course-api.com" 

import {useEffect} from "react";
import authFetch from "../axios/custom";

const randomURL = ""

function App() {
    const fetchData = async () => {
        try {
            const resp1 = await authFetch("/");
            const resp2 = await axios(randomURL)
        }catch
    }

    useEffect(() => {

    }, [])
    return ()
}

export default App;
*/