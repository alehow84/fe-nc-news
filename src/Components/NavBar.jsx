import { useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";

import NavLink from "./NavLink"
import { getAllArticles, getSingleArticle } from "../Api";

export default function NavBar({setSingleArticle}){
const [searchArticle, setSearchArticle] = useState('');
const navigate = useNavigate()

//useEffect to rerender after searchArticle state is changed and make the call to the api to get single article
useEffect(()=>{
    getSingleArticle(searchArticle)
    .then((response)=>{
        console.log(response, 'response in useEffect')
        //setSingleArticle to the response - this isn't working as expected as when i access singleArticle in SingleArticle component, it returns the whole object
        setSingleArticle(response)
    })

}, [searchArticle])

//function to hangle change
function handleChange(event){
console.log(event.target.value, "event.target.value following input change")
setSearchArticle(event.target.value)
}

//function to handle submit
function handleSubmit(event){
    event.preventDefault()
    navigate(`/articles/${searchArticle}`)
    //clear the input
    setSearchArticle('')
}

    return (
        <>
        <nav>
            <ul>
                <NavLink linkDestination={'/'} linkName={'Articles Home'} />
                {/* Add more Nav links here for Topics and switch users later */}
            </ul>
        </nav>
         <form onSubmit={handleSubmit}className="" action="">
         <input onChange={handleChange} type="text" placeholder="Search by article ID..." name="search"/>
         <button type="submit">Go to article</button>
         </form>
         </>
    )
}