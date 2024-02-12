import axios from "axios";

const api = axios.create({
    baseURL: "https://nc-news-dcnn.onrender.com",
  });

export const getAllArticles = () => {
    return api
    .get(`/api/articles`)
    .then(({data})=>{
        return data
    })
}   

export const getSingleArticle = (article_id) => {
    return api
    .get(`/api/articles/${article_id}`)
    .then(({data})=>{
        return data
    })
}

export const getArticleComments = (article_id) => {

    return api
    .get(`/api/articles/${article_id}/comments`)
    .then(({data})=>{
        return data
    })
}

export const getUsers = () => {

    return api
    .get(`/api/users`)
    .then(({data})=>{
        return data
    })
}

export const patchVotes = (article_id, newVotes) => {
    return api
    .patch(`/api/articles/${article_id}`, {inc_votes : newVotes})
    .then(({data})=>{
        return data
    })
}

export const postComment = (article_id, commentObj) => {
    
    return api
    .post(`/api/articles/${article_id}/comments`, commentObj )
    .then(({data})=>{
        return data
    })

}