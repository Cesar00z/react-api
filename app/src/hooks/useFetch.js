import { useState, useEffect } from 'react';
import axios from "axios";

export default function useFetch() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState(null);
    
    useEffect(() => {
        async function getData() {
            let url = `https://rickandmortyapi.com/api/character?page=${page}`
            try {
                let res = await axios.get(url);
                let data = res.data;
                let info = data.info;
                setData(data.results);
                setInfo(info);
           
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, [page]);

    const prevPage = () => page ? setPage(page - 1) : null
    const nextPage = () => setPage(page + 1)

    return {
        data,
        loading,
        error,
        info,
        prevPage,
        nextPage
    }
}
