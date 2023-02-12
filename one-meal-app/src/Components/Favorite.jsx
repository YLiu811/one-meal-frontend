import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import FavoritesList from '../pages/FavoritesList';
// import Favorites from '../pages/FavoritesList';
// import Searched from '../pages/Searched';
// import { useParams } from "react-router-dom";
// import { FaHeart } from 'react-icons/fa'
// import { useAppContext } from "../context/appContext";

const Favorite = (props) => {
    const [like, setLike] = useState(false)
    let [count, setCount] = useState(0);

    const [title,setTitle] = useState('')
    const [image,setImage] = useState('')
    const [id,setId] = useState('')
    const addRecipe = async(i)=>{
        let userId = localStorage.getItem('userId')
        console.log(i)
        setId(i.id)
        setTitle(i.title)
        setImage(i.image)
        
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/favorites/${userId}`,{title:i.title,image:i.image,userId})
        .then((response)=>{
            console.log(response)
        }).catch((e)=>{
            console.log(e)
        })
    }
    const HeartColorChange = like ? '❤️' : '🤍';
    const clickHeart = () =>{
        setLike(!like);
    }
    const addLike = (inc) => {
        console.log(`add function work ${inc} and ${count}`);
        if (inc && !like) {
          count++;
        }
        setCount(count);
      };
    
    return (
        <div className='container'>
            <div className='overlay'>
                {/* <FaHeart onClick={() => addToFave}></FaHeart> */}
                <span onClick={()=>{clickHeart(props.recipe); addLike(true);addRecipe(props.recipe)}}>{HeartColorChange}</span>
            </div>
            {/* <FavoritesList title={title} id={id} image={image}/> */}
        </div>
    )
}

export default Favorite
