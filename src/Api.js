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
        return response.data
    })
}

export const getArticleComments = (article_id) => {
    //request not working, though is injecting the article id correctly 
    return axios
    .get(`https://nc-news-dcnn.onrender.com/api/articles/${article_id}/commments`)
    .then((response)=>{
        console.log(response.data, "response.data in getArticleComments")
    })
    .catch((error)=>{
        console.log(error, "error")
    })
}