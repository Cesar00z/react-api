import { useState, useEffect } from 'react';
import axios from "axios";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            try {

                let res = await axios.get(url);
                let data = res.data;
                setData(data.results);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [url]);

    return { data, error, loading }
}