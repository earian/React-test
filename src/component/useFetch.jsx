import { useState , useEffect } from "react";

const useFetch = (url) => {
    let [data, setData] = useState(null);
    let [isPending , setIsPending] = useState(true);
    let [error , setError] = useState(null);



    useEffect(()=>{
        setTimeout(() => {
            fetch(url)
            .then(res => {
                if(res.ok) return res.json()
                else throw Error(`Couldn't fetch the data right now`)
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
                setData(null);
            });
        }, 3000);
    }, [])

    return { data , isPending , error };
}

export default useFetch;