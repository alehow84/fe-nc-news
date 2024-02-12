import {Row, Col} from 'react-bootstrap'
import DeleteComment from './DeleteComment';
import {useState, useContext} from "react"
import UserContext from '../Context/UserContext';

import {format} from "date-fns";

export default function CommentCard({comment}){
    const loggedInUser = useContext(UserContext)
    const [deleteButtonVisable, isDeleteButtonVisible] = useState(false)

   //define a state for deleteButtonVisible and set to false
   //pass setState for above as prop to DeleteComment Component
   //conditional rendering - DeleteComment component is only rendered if 

    return (
        <div>
            <p> <span className="comment-author">{comment.author}</span>  | {format(new Date(`${comment.created_at}`), "dd/MM/yyyy p")} </p>
            <p>{comment.body}</p>
            <Row>
                <Col><p>Votes: {comment.votes}</p></Col>
                <Col>{comment.author === loggedInUser ? <DeleteComment deleteButtonVisable={deleteButtonVisable} isDeleteButtonVisible={isDeleteButtonVisible}/> : null}</Col>
            </Row>
            
        </div>
    )
}