import React from 'react'
// import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {
    // const URL = "https://api.spoonacular.com/recipes/random?";
    const [popular, setPopular] = useState([])
    useEffect(() => {
        getPopular();
    },[]);

    // const getPopular = async () => {
    //     axios
    //     // .get(`${URL}apiKey=${process.env.API_KEY}&number=9`)
    //     .get('https://api.spoonacular.com/recipes/random?apiKey=88cbb41354b04d13858d7f377e338113&number=9')
    //     .then((res) => {
    //         console.log(res);
    //     setPopular(res.recipes);
    // })
    //     .catch((err) => {
    //     console.log(err);
    // });
    // };
    const getPopular = async () => {
        const api = await fetch('https://api.spoonacular.com/recipes/random?apiKey=88cbb41354b04d13858d7f377e338113&number=9')
        const res = await api.json();
        setPopular(res.recipes);
    };

    return (
        <div>
            <Wrapper>
                <h3>Editors' Popular Picks</h3>
                <Splide>
                    <div>
                    {popular.map((recipe) => {
                        return (
                            <SplideSlide>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </Card>ds
                            </SplideSlide>
                        );
                        })};
                    </div>
                </Splide>
            </Wrapper>
        </div>
    );
};
    const Wrapper = styled.div`
        margin: 4rem 0rem;
    `;

    const Card = styled.div`
        min-height: 25rem;
        border-radius: 2rem;
        overflow: hidden;

        img{
            border-radius: 2rem;
        }
    `;


export default Popular;
