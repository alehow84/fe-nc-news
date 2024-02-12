import {Row, Col} from 'react-bootstrap'
import DeleteComment from './DeleteComment';
import {useContext} from "react"
import UserContext from '../Context/UserContext';

import {format} from "date-fns";

export default function CommentCard({setComments, comment}){
    const loggedInUser = useContext(UserContext)

    return (
        <div>
            <p> <span className="comment-author">{comment.author}</span>  | {format(new Date(`${comment.created_at}`), "dd/MM/yyyy p")} </p>
            <p>{comment.body}</p>
            <Row>
                <Col><p>Votes: {comment.votes}</p></Col>
                <Col>{comment.author === loggedInUser.username ? <DeleteComment  setComments={setComments} comment={comment}/> : null}</Col>
            </Row>
            
        </div>
    )
}
