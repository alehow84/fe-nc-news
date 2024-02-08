import '../CSS/App.css'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ArticlesCard({articles}){
    return (
        <>
        {articles.map((article)=>{
            return (
      <div className="articles-card">
      <Link key={article.article_id} to={`/articles/${article.article_id}`}>
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
        <Typography variant="body2" color="text.secondary">
          Author: {article.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Article ID: {article.article_id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Written: {article.created_at.slice(0,10)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Votes: {article.votes}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Card>
      </Link>
      </div>
            )
        })  
       }
       </>
    )
}