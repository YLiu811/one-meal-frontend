import React from 'react'
import axios from "axios";
import { useState } from "react";
import { FaHeart } from 'react-icons/fa'


const Favorite = () => {
    const [favorites, setFavorites] = useState([]);
    const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

    const handleClick = (recipe) => {
        console.log('add to fave icon clicked')
        axios.post(`${REACT_APP_BACKEND_URL}/favorites`, recipe)
        .then((response)=>{
        const newFaves = [...favorites];
        const newFaveJSON={
            ...recipe,
            "userId": response.data.id
        }
        newFaves.push(newFaveJSON);
        setFavorites(newFaves); //this method does not require a .get request; we are pushing the Fave data to the Faves list and using the setter to trigger a rerender.
        })
        .catch((error)=>{
        console.log(error);
        });
    }

    return (
        <div className='container'>
            <div className='overlay'>
                <FaHeart onClick={() => handleClick}></FaHeart>
            </div>
        </div>
    )
}

export default Favorite
