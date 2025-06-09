import { useEffect, useState } from "react"

// we shall take currency as input for this hook to show required currency data.
function useCurrency(currency){
    const [data,setData] = useState({});
    let url =`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    // now we want to fetch as soon as some dependency changes -- this is useEffect
    useEffect(()=>{
        fetch(url) // fetch the url
        .then((res)=> res.json()) // we get res and we return json format to next chain
        .then((res)=> setData(res[currency])); // if we explore the api call result we find the requirements to be in currency attribute
    },[currency]); // whenever any currency change is there.
    console.log(data); // to check the data we got
    return data; // a function and a return value .. we have made our first custom hook
    // and from this data we can access the api calls
}

export default useCurrency;