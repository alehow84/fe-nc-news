import axios from "axios";

export const getAllArticles = () => {
    return axios
    .get(`https://nc-news-dcnn.onrender.com/api/articles`)
    .then((response)=>{
        return response.data
    })
}   
