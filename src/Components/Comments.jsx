import { useEffect, useState } from "react"
import { getArticleComments } from "../Api"

export default function Comments({article_id}){
const [comments, setComments] = useState(null)

useEffect(()=>{
    getArticleComments(article_id)
    .then((response)=>{
        console.log(response, "response in comments component")
    })
},[])

    
    return (
        <>
        <ul id="comments-list">
            {/* map over each comment object and return a comment card/div */}
        <li>Comment 1</li>
        </ul>
      </>
    )
}