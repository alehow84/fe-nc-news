import { useEffect, useState } from "react"
import { getArticleComments } from "../Api"
import CommentCard from "./CommentCard"
import StyledBox from "./StyledBox"
export default function Comments({article_id}){
console.log(article_id, "article_id in Comments")
const [comments, setComments] = useState(null)

//this sets the layout of the comments section, makes the call to the api to get comments
//

useEffect(()=>{
    getArticleComments(article_id)
    .then((commentsResponse)=>{
        console.log(commentsResponse, "response in comments component")
        //setComments(commentsResponse)
    })
},[])

    
    return (
       
        <ul id="comments-list">
            {/* map over each comment object and return a comment card/div */}
        <li>
            <StyledBox>
                <CommentCard/>
            </StyledBox>
        </li>
        </ul>
       
    )
}