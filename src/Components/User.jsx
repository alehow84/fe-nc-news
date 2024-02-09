import { useContext } from "react";
import UserContext from "../Context/UserContext";


export default function User(){
    const loggedInUser = useContext(UserContext);


    return (
        <div className="header-user-display">
        <img src={loggedInUser.avatar_url} alt={`avatar for user ${loggedInUser.username}`}/>
        <p>{loggedInUser.username}</p>
        </div>
    )
}