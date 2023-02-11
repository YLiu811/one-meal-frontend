// import axios from 'axios';
import React, { useState } from 'react'
// import { FaHeart } from 'react-icons/fa'
// import { useAppContext } from "../context/appContext";

const Favorite = (props) => {
    // const { favorites, addToFave, removeFave } = useAppContext();
    // const { favorites, addToFave } = useAppContext();
    const [like, setLike] = useState(false)
    let [count, setCount] = useState(0);
    // console.log(`favorites: ${favorites}`);
    // const favoritesCheck = (id) => {
    //     const found = favorites.some((recipe) => recipe.id === id);
    //     return found;
    // };
    const HeartColorChange = like ? '❤️' : '🤍';
    const clickHeart = (id) =>{
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
                <span onClick={()=>{clickHeart(props.id); addLike(true);}}>{HeartColorChange}</span>
            </div>
        </div>
    )
}

export default Favorite
