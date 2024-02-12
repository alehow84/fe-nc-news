import {Button} from 'react-bootstrap'
import { useState} from 'react'
import { deleteComment } from '../Api'
const styles = {
    disabledButton: {
        backgroundColor: 'gray',
        color: 'white',
        cursor: 'not-allowed',
        padding: 10,
        borderRadius: "8px",
        border: "none",
        boxShadow: "0px 0px 10px 0px grey",
    }
}

export default function DeleteComment(props){

const [isButtonDisabled, setIsButtonDisabled] = useState(false)
const {setComments, comment} = props 


function handleClick(){
    setIsButtonDisabled(true)
    deleteComment(comment.comment_id)
    .then((statusCode)=>{
        alert(`${statusCode}: Your comment has been deleted 🗑️`)
        setComments((currentComments)=>{
            const copyCommentsList = [...currentComments]
            const updatedComments = copyCommentsList.filter((comm)=> comm.comment_id !== comment.comment_id)
            return updatedComments
        })  
    })
    .catch(()=>{
        setIsButtonDisabled(false)
        alert("There was a problem deleting your comment - please try again")
    })

}

    return (
        <>
        <Button onClick={handleClick}variant="warning" style={isButtonDisabled ? styles.disabledButton : null} disabled={isButtonDisabled}>Delete</Button>{' '}
        </>
    )

}