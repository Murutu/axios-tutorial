/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import {useEffect} from 'react';
import authFetch from '../axios/Interceptor';

const url = "https://course-api.com/react-store-products"

const InterceptorRequest = () => {

    const fetchData = async () => {
        try {
            const resp = await authFetch("/react-store-products");
        } catch (error) {}
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
    <div>Interceptor</div>
    )
}

export default InterceptorRequest;


/*
function App() {

    const fetchData = async () => {
        console.log()
    }

    useEffect(() => {
        fetchData()
    }, []);

    return ()
}

export default App;
*/