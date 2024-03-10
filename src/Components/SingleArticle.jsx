import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle, patchVotes } from "../Api";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";
import Comments from "./Comments";
import * as React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function SingleArticle() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [showComments, setShowComments] = useState(false);
  const [commentCount, setCommentCount] = useState(null);
  const [hasCommented, setHasCommented] = useState(false);
  const [voteCount, setVoteCount] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setVoteCount(article.votes);
        setCommentCount(Number(article.comment_count));
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        setError(error.response.data);
      });
  }, [voteCount]);

  function HandleCommentClick() {
    setShowComments(!showComments);
  }

  function handleVote(votes) {
    const newVotes = { inc_votes: votes };
    setVoteCount((voteCount) => {
      voteCount + votes;
    });
    patchVotes(article_id, newVotes);
    //update setHasVoted to true?
  }

  if (isLoading) return <LoadingComponent />;
  if (isError) return <ErrorComponent error={error} />;

  return (
    <>
      <div className="articles-card">
        <Card sx={{ maxWidth: 1000 }}>
          <CardMedia
            sx={{ height: 300 }}
            image={article.article_img_url}
            title={`image depicting ${article.topic}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {article.title}
            </Typography>
            <Row>
              <Col>
                <Typography gutterBottom variant="h6" component="div">
                  Topic: {article.topic}
                </Typography>
              </Col>
              <Col>
                <Typography gutterBottom variant="h6" component="div">
                  Author: {article.author}
                </Typography>
              </Col>
            </Row>
            <Typography variant="body1" color="text">
              {article.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={HandleCommentClick} size="medium">
              Comments:{" "}
              {hasCommented === false ? article.comment_count : commentCount}
            </Button>
            <Button size="medium">
              Votes: {hasVoted === false ? article.votes : voteCount}
            </Button>
            <Button
              onClick={(event) => {
                handleVote(event.target.value);
              }}
              value={1}
              variant="contained"
              color="success"
            >
              Upvote 👍
            </Button>
            <Button
              onClick={(event) => {
                handleVote(event.target.value);
              }}
              value={-1}
              variant="contained"
              color="error"
            >
              Downvote 👎
            </Button>
          </CardActions>
        </Card>
      </div>
      {showComments === false ? null : (
        <Comments
          article_id={article_id}
          commentCount={commentCount}
          setCommentCount={setCommentCount}
          setHasCommented={setHasCommented}
        />
      )}
    </>
  );
}
