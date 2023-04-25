import axios from "axios";

const authFetch = axios.create({
    baseURL: "https://course-api.com",
    headers: {
        Accept: "application/json"
    }
});

export default authFetch;

/*
import axios from "axios";

const authFetch = axios.create({
    baseURL: ""
})
*/