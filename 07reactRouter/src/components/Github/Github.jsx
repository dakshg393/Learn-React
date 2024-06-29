import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github(){
    const data = useLoaderData()

    // const [data,setdata] = useState([]) 

    // useEffect(()=> {

    //     fetch('https://api.github.com/users/dakshg393')
    //     .then((response)=> response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setdata(data)
    // })
    // },[])

    return (
        <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'> Github followers : {data.followers} 
            <img src={data.avatar_url} alt='git picture'  width={300} height={300} />
        </div>
    )
}

export const githubInfoLoder = async ()=> {
    const response = await fetch('https://api.github.com/users/dakshg393')

    return response.json()
}