import axios from "axios";

const api = axios.create({
    baseURL: "https://nc-news-dcnn.onrender.com",
  });

export const getAllArticles = () => {
    return api
    .get(`/api/articles`)
    .then((response)=>{
        return response.data
    })
}   

export const getSingleArticle = (article_id) => {
    return api
    .get(`/api/articles/${article_id}`)
    .then((response)=>{
        return response.data
    })
}

export const getArticleComments = (article_id) => {
    //request not working, though is injecting the article id correctly 
    return api
    .get(`/api/articles/${article_id}/commments`)
    .then((response)=>{
        console.log(response.data, "response.data in getArticleComments")
    })
    .catch((error)=>{
        console.log(error, "error")
    })
}