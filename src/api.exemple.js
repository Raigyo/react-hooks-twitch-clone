import axios from 'axios';

let api = axios.create({
    headers: {
        "Client-ID": "YOUR_CLIENT_ID",
        "Authorization": "Bearer YOUR_TOKEN"
        }
})

/*
    CLIENT_ID = 'YOUR_CLIENT_ID';
    REDIRECT = 'http://127.0.0.1/';

    LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id={CLIENT_ID}&redirect_uri={REDIRECT}&response_type=token


*/

export default api;