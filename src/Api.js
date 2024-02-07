import axios from "axios";

export const getAllArticles = () => {
    return axios
    .get(`https://nc-news-dcnn.onrender.com/api/articles`)
    .then((response)=>{
        return response.data
    })
}   

export const getSingleArticle = (article_id) => {
    return axios
    .get(`https://nc-news-dcnn.onrender.com/api/articles/${article_id}`)
    .then((response)=>{
        console.log(response.data, "response.data in singlearticle request")
        return response.data
    })
}