import React from 'react'
import Popular from "../Components/Popular";
import Search from '../Components/Search';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <div>
            <>
                <Helmet>
                <title>OneMeal | Home</title>
                </Helmet>
            </>
            <h1>One Meal</h1>
            <h2>Your one stop shop to a great meal</h2>
            <Search />
            <Popular />
        </div>
    )
}

export default Home;