/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import {useState} from 'react';
import axios from "axios";

const url = "https://icanhazdadjoke.com/";

const Headers = () => {

    const [joke, setJoke] = useState("random dad joke");

    const fetchDadJoke = async () => {
        try {
            const {data} = await axios(url, {
                headers: {
                    Accept: "application/json"
                },
            });
            setJoke(data.joke);
        } catch (error) {
            console.log(error.response)
        }
    }

    return (
    <div>
        <button onClick={fetchDadJoke}>random joke</button>
        <p>{joke}</p>
    </div>
    )
}

export default Headers

/*
for the get method we add a 2nd argument (url, {}) 
we do this if we want additional info from the headers

const fetchDadJoke = async () => {
    try {
        const response = await axios(url, {
            headers: {
                Accept: "application/json"
            }
        })
    } catch (error) {

    }
}

// destructuring the data

const fetchDadJoke = async () => {
    try {
        const {data} = await axios (url, {
            headers: {
                Accept: "application/json"
            }
        });
        console.log(data.joke) // this will show us the specific joke
        We then set the joke equal to what were getting back
        setJoke(data.joke)
    } catch(error) {}
}
*/