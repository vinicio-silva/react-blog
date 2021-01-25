import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data,setdata] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if(!res.ok) {
                        throw Error('Não foi possível buscar os dados para esse recurso');
                    }
                    return res.json();
                })
                .then(data => {
                    setdata(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    setIsLoading(false);
                    setError(err.message);
                })
        }, 1000);
    }, [url]);
    return { data,isLoading,error }
}

export default useFetch;