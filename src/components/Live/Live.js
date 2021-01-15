import React, { useState, useEffect } from "react";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import { useParams } from "react-router-dom";
/* useParams returns an object of key/value pairs of URL parameters.
Use it to access match.params of the current <Route>. */
import api from "../../api";

function Live() {
  let { slug } = useParams();
  // state / setter
  const [infoStream, setInfoStream] = useState([]);

  // API CALL
  useEffect(() => {
    const fetchData = async () => {
      // Get Streams
      const result = await api.get(
        `https://api.twitch.tv/helix/streams?user_login=${slug}`
      );
      console.log(result);
      setInfoStream(result.data.data[0]);
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <div className="containerShifted">
        <ReactTwitchEmbedVideo height="754" width="100%" channel={slug} />
        <div className="contInfo">
          <div className="titleStream">{infoStream.title}</div>
          <div className="viewer">Viewers: {infoStream.viewer_count}</div>
          <div className="gameInfo">
            Streamer: {infoStream.user_name}, &nbsp; Language :{" "}
            {infoStream.language}
          </div>
          <div className="gameName">Game: {infoStream.game_name}</div>
        </div>
      </div>
    </>
  );
}

export default Live;
