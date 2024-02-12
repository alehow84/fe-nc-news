import { useEffect, useState } from "react"
import { getArticleComments } from "../Api"
import CommentCard from "./CommentCard"
import AddComment from "./AddComment"
import StyledBox from "./StyledBox"
import LoadingComponent from "./LoadingComponent"


export default function Comments(props){
const {article_id, commentCount, setCommentCount, setHasCommented} = props;
const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(true)
//is error state here?


useEffect(()=>{
    getArticleComments(article_id)
    .then((commentsResponse)=>{
        setIsLoading(false)
        setComments(commentsResponse)
    })
},[comments])
 
if(isLoading) return (<LoadingComponent/>)
     return (
        <>
        <AddComment article_id={article_id} setComments={setComments} setCommentCount={setCommentCount} commentCount={commentCount} setHasCommented={setHasCommented}/>
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
        </>
    )
}