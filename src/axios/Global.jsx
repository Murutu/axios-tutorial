import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";

/*
instead of setting this globally to all the requests made by axios => axios.defaults.headers.common

we can use a custom instance like this
where we add the headers only if we invoke the authFetch

headers: {
        Accept: `application/json`
    }

const authFetch = axios.create({
    baseURL: "",
    headers: {
        Accept: `application/json`
    }
})
*/