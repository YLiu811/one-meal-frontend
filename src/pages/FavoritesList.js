import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// import Recipe from "./Recipe";
const FavoritesList = () => {
  const [favList, setFavList] = useState([]);
  // get favorits from DB
  const fetchFavorits = async () => {
    let user_id = localStorage.getItem("userId");
    if (user_id) {
      try {
        await axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/user/${user_id}/favorites`)
          .then((response) => {
            console.log(response);
            setFavList(response.data);
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchFavorits();
  }, []);
  //   delete one favorit
  const deletefav = (favId) => {
    console.log("delete called");
    console.log({ favId });
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/favorites/${favId}`)
      .then(() => {
        const newFavsList = [];
        for (const fav of favList) {
          if (fav.id !== favId) {
            newFavsList.push(fav);
          }
        }
        setFavList(newFavsList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Title>Your Favorites</Title>
      <br />
      <Grid>
        {favList.map((fav, i) => {
          return (
            <Card>
              <div className="list" key={i}>
                <p>
                  {fav.title}
                  <br />
                  <a href={`/recipe/${fav.recipe_id}`}>
                    <img src={fav.image} alt={fav.title} />
                  </a>
                  <br />
                </p>
                <button
                  className="deletebook"
                  onClick={() => {
                    deletefav(fav.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 0.65fr));
  grid-gap: 3rem;
  margin-left: 0;
  padding-left: 0;
`;
const Title = styled.h2`
  display: inline-block;
`;
const Card = styled.div`
    position: relative;
    img {
        width: 100%;
        border-radius: 1.6rem;
        padding: 0;
    }
    a {
        text-decoration: none;
    }
    h4 {
        postion: inline-block;
        font-size: 1.1em;
        line-height: 1.2em;
        text-align: center;
        vertical-align: middle;
        padding: 1.2rem 0 0;
        margin: 0;
    }
    container = {
        position: relative;
        transition: transform 0.2s;
        &:hover{
            cursor: pointer;
            transform: scale(1.1);
    }
    container:hover .overlay{
        opacity: 1;
    }
    overlay = {
        align-items: center;
        justify-content: center;
        position: absolute;
        background: #FF8474;
        width: 100%;
        transition: 0.5s ease;
        opacity: 0;
        bottom: 0;
        font-size: 1.2rem;
        padding: 0.5;
        text-align: center;
    }
`;

export default FavoritesList;
