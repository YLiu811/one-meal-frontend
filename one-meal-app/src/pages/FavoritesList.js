import { useState, useEffect } from "react";
import axios from "axios";
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
          if (fav.favorit_id !== favId) {
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
    <>
      <br />
      {favList.map((fav, i) => {
        return (
          <div className="list" key={i}>
            <p>
              {fav.title}
              <br />
              <img src={fav.image} />
              <br />
            </p>
            <button
              className="deletebook"
              onClick={() => {
                deletefav(fav.favorit_id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default FavoritesList;
