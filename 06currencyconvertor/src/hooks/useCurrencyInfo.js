// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json
import {useEffect, useState} from 'react'

function useCurrencyInfo(currency){

    const [data,setdata] = useState({})


    useEffect(()=>{
        fatch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json")
        .then((res)=> res.json)
        .then((res)=> setdata(res[currency]) )
    },[currency])

    return data

}

export default useCurrencyInfo