import React, {useState, useEffect} from 'react';
import api from '../../api';
// import {Link} from 'react-router-dom';

function Sidebar(){

  // state / setter
  const [topStreams, setTopStreams] = useState([]);

  // API CALL
  useEffect(() => {
    const fetchData = async () => {
      // Get Streams
      const result = await api.get('https://api.twitch.tv/helix/streams');
      // console.log(result);

      // Array of informations about active streams
      let dataArray = result.data.data;

      // Array of users id's (needed to retrieve players login + thumbnail)
      let userIDs = dataArray.map(stream => {
        return stream.user_id;
      })
      // console.log("user id", userIDs);

      // Parameters to add to url to retrieve all users informations
      let queryParamsUsers = "";
      userIDs.map(id => {
        return (queryParamsUsers = queryParamsUsers + `id=${id}&`)
      })

      // Get Users
      let getUsers = await api.get("https://api.twitch.tv/helix/users?" + queryParamsUsers);
      let arrayUsers = getUsers.data.data;
      // console.log(arrayUsers);

      // Final array creation
      let finalArray = dataArray.map(stream => {
        const selectedUser = arrayUsers.filter(user => user.id === stream.user_id)
        stream.truePic = selectedUser[0].profile_image_url;
        stream.login = selectedUser[0].login;
        return stream
      })
      console.log("finalArray:", finalArray)
    }
    fetchData();
  }, [])

  return (
    <div className="sidebar">
      <h2 className="titleSidebar">Recommended channels</h2>
      <ul className="streamList">

      </ul>

    </div>
  )
}

export default Sidebar;