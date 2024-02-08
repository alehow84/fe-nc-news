import { useEffect, useState } from "react"
import { getArticleComments } from "../Api"
import CommentCard from "./CommentCard"
import StyledBox from "./StyledBox"
import LoadingComponent from "./LoadingComponent"


export default function Comments({article_id, comments, setComments}){
//is loading and error state here

useEffect(()=>{
    getArticleComments(article_id)
    .then((commentsResponse)=>{
        setComments(commentsResponse)  
    })
},[])
 

     return (
        <ul id="comments-list">
            {comments.map((comment)=>{
                return (
                <li key={comment.comment_id}>
                <StyledBox>
                    <CommentCard comment={comment}/>
                </StyledBox>
            </li> )
            })}
        </ul>  
    )
}