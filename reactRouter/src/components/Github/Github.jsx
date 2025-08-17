import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ssid18')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])

    const data =  useLoaderData()
    return ( 
        <div className='text-center m-4 bg-gray-600 text-2xl text-white'>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt='git picture' width={300}/>
        </div>
     );
}

export default Github;

export const githubInfoLoader = async() =>{
    const response = await fetch('https://api.github.com/users/ssid18')
    return response.json()
}