import axios from 'axios';

const newInstance = axios.create({
    // This Feature provides by Axios that allows you to setup a new config to axios with the repeatable url that you will reuse it in differnt places so you just need to put the base URL and when you call axios in your request you just put the header url that you want to call it to get the data 
    baseURL: "https://api.themoviedb.org/3", 
});

export default newInstance;