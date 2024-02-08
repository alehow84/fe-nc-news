import { useEffect, useState } from "react"
import { getArticleComments } from "../Api"
import CommentCard from "./CommentCard"
import StyledBox from "./StyledBox"
import LoadingComponent from "./LoadingComponent"


export default function Comments({article_id, comments, setComments}){
const [isLoading, setIsLoading] = useState(true)
//is error state here?

useEffect(()=>{
    getArticleComments(article_id)
    .then((commentsResponse)=>{
        setIsLoading(false)
        setComments(commentsResponse)  
    })
    .catch(()=>{

    })
},[])
 
if(isLoading) return (<LoadingComponent/>)
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