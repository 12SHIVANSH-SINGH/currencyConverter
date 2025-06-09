import { useEffect, useState } from "react"


function useCurrency(){
    const [currency,setCurrency] = useState("");
    const [data,setData] = useState({});
    let url =`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    // now we want to fetch as soon as some dependency changes -- this is useEffect
    useEffect(()=>{
        fetch(url) // fetch the url
        .then((res)=> res.json()) // we get res and we return json format to next chain
        .then((res)=> setData(res[currency])); // if we explore the api call result we find the requirements to be in currency attribute
    },[currency]); // whenever any currency change is there.
    console.log(data);
    return data; // a function and a return value .. we have made our first custom hook
}

export default useCurrency;