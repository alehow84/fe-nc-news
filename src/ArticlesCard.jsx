import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ArticlesCard({articles}){
    return (
        <>
        {articles.map((article)=>{
            return (
            <Card key={article.article_id}>
            <Card.Header>Article ID: {article.article_id}</Card.Header>
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
              <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p><p>Article ID: {article.article_id}</p>
                    <p>Created: {article.created_at}</p>
                    <p>Votes: {article.votes}</p>
              </Card.Text>
              <Button variant="primary">Click to Read</Button>
            </Card.Body>
          </Card> 
            )
        })
         
       }
       </>
    )

}