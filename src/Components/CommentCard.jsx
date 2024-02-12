import {format} from "date-fns";

export default function CommentCard({comment}){
    console.log(comment, "<<<comment being received in commentCard")

    return (
        <div>
            <p> <span className="comment-author">{comment.author}</span>  | {format(new Date(`${comment.created_at}`), "dd/MM/yyyy p")} </p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
        </div>
    )
}