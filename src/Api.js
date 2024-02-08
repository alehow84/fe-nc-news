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

    return api
    .get(`/api/articles/${article_id}/comments`)
    .then((response)=>{
        return response.data
    })
}