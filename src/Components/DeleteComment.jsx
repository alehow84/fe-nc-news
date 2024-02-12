import {Button} from 'react-bootstrap'
import {useContext, useEffect, useState} from 'react'
import UserContext from "../Context/UserContext"

export default function DeleteComment(props){
const loggedInUser = useContext(UserContext)
//state for deleteButtonVisible passed in as a prop
//might not need userContext here

    return (
        <>
        <Button variant="warning">Delete</Button>{' '}
        </>
    )

}