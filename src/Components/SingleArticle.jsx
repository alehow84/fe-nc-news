import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, patchVotes } from "../Api";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";
import Comments from "./Comments";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function SingleArticle({singleArticle}){
  //im not using singleArticle
    const [article, setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState([])
    const [voteCount, setVoteCount] = useState(null)
    const [hasVoted, setHasVoted] = useState(false)
    const {article_id} = useParams()
    

    useEffect(()=>{
        getSingleArticle(article_id)
        .then((response)=>{
            setArticle(response.article)
            setVoteCount(response.article.votes)
            setIsLoading(false)
        })
        .catch(()=>{
          setIsError(true)
        })
    },[voteCount])

    function HandleCommentClick() {
      setShowComments(!showComments)
    }

    function handleVote(votes){
      const newVotes = {inc_votes: votes}
      setVoteCount((voteCount)=>{voteCount + votes})
      patchVotes(article_id, newVotes)
      
    }

    function handleUpvote(){
      setHasVoted(true)
      handleVote(1)
    }

    function handleDownvote(){
      setHasVoted(true)
      handleVote(-1)
      
      }

    if (isLoading) (<LoadingComponent/>)
    if (!isError) (<ErrorComponent/>)
    
    return (
      <>
      <div className="articles-card">
        <Card sx={{ maxWidth: 800 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={article.article_img_url}
          title={`image depicting ${article.topic}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {article.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Author: {article.author}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Topic: {article.topic}
          </Typography>
          <Typography variant="body1" color="text">
            {article.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={HandleCommentClick} size="medium">Comments: {article.comment_count}</Button>
          <Button size="medium">Votes: {hasVoted === false ? article.votes : voteCount}</Button>
          <Button onClick={handleUpvote} variant="contained" color="success">
        Upvote 👍
        </Button>
        <Button onClick={handleDownvote} variant="contained" color="error">
        Downvote 👎
      </Button>
        </CardActions>
      </Card>
      </div>
      {showComments === false ? null : (<Comments comments={comments} setComments={setComments} article_id={article_id}/>)}

      </>
    )
}