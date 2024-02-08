
export default function CommentCard({comment}){
    return (
        <div>
            <p> <span className="comment-author">{comment.author}</span>  | {comment.created_at.slice(0,10)} </p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
        </div>
    )
}