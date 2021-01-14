import React, { useState, useEffect } from "react";
import api from "../../api";

function Games() {
  // state / setter
  const [games, setGames] = useState([]);

  // API CALL: Get Top Games
  // useEffect  runs after render and every time the DOM updates like
  // componentDidMount, componentDidUpdate, componentWillUnmount.
  // [] as second argument: just run the function once (avoid infinite loop)
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top");
      // console.log(result);

      // Aaay of games sorted by number of current viewers on Twitch, most popular first
      let dataArray = result.data.data;
      // mapping of dataArray
      let finalArray = dataArray.map((game) => {
        // we create a new url for images and we add width and height
        let newUrl = game.box_art_url
          .replace("{width}", 250)
          .replace("{height}", 300); // we replace width and height by values
        game.box_art_url = newUrl; // we replace url without dimensions by new url
        return game;
      });
      setGames(finalArray); // we set the state
    };
    fetchData(); // Immediately Invoked Function Expression / IIFE
  }, []);
  // console.log("games array:", games);

  return (
    <>
      <h1 className="titleGames">Popular games</h1>
      <div className="flexHome">
        {games.map((game, index) => (
          <div key={index} className="cardGame">
            <img
              src={game.box_art_url}
              alt="Game progile pic"
              className="imgCard"
            />
            <div className="cardBodyGame">
              <h5 className="titleCardsGames">{game.name}</h5>
              <div className="btnCard">Watch {game.name} !</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Games;
