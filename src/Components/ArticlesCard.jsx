import "../CSS/App.css";
import { Link } from "react-router-dom";
import * as React from "react";
import { format } from "date-fns";
import { Row, Col } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ArticlesCard({ articles, topicalArticles }) {
  let articleCardArr = articles;
  topicalArticles ? (articleCardArr = topicalArticles) : null;

  return (
    <>
      {articleCardArr.map((article) => {
        return (
          <div key={article.article_id} className="articles-card">
            <Link to={`/articles/${article.article_id}`}>
              <Card sx={{ maxWidth: 800 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={article.article_img_url}
                  title={article.topic}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Row>
                    <Col>
                      <Typography variant="body2" color="text.secondary">
                        Article ID: {article.article_id}
                      </Typography>
                    </Col>
                    <Col>
                      <Typography variant="body2" color="text.secondary">
                        Author: {article.author}
                      </Typography>
                    </Col>
                    <Col>
                      <Typography variant="body2" color="text.secondary">
                        Written:{" "}
                        {format(
                          new Date(`${article.created_at}`),
                          "dd/MM/yyyy"
                        )}
                      </Typography>
                    </Col>
                    <Col>
                      <Typography variant="body2" color="text.secondary">
                        Votes: {article.votes}
                      </Typography>
                    </Col>
                  </Row>
                </CardContent>
                <CardActions>
                  <Button size="small">Click to read more...</Button>
                </CardActions>
              </Card>
            </Link>
          </div>
        );
      })}
    </>
  );
}
