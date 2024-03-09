import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-dcnn.onrender.com/api",
});

export const getAllArticles = () => {
  return api.get(`/articles`).then(({ data }) => {
    return data;
  });
};

export const getSingleArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data;
  });
};

export const getArticleComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const getUsers = () => {
  return api.get(`/users`).then(({ data }) => {
    return data;
  });
};

export const getTopics = () => {
  return api.get(`/topics`).then(({ data }) => {
    return data;
  });
};

export const getArticlesByTopic = (selectedTopic) => {
  return api
    .get(`/articles/`, { params: { topic: selectedTopic } })
    .then(({ data }) => {
      return data;
    });
};

export const sortArticles = (orderQuery, sortQuery) => {
  let path = `/articles/?order=${orderQuery}`;
  sortQuery
    ? (path += `&sort_by=${sortQuery}`)
    : (path += `&sort_by=created_at`);

  return api.get(path).then(({ data }) => {
    return data;
  });
};

export const patchVotes = (article_id, newVotes) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: newVotes })
    .then(({ data }) => {
      return data;
    });
};

export const postComment = (article_id, commentObj) => {
  return api
    .post(`/articles/${article_id}/comments`, commentObj)
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (commentId) => {
  return api.delete(`/comments/${commentId}`).then(({ status }) => {
    return status;
  });
};
