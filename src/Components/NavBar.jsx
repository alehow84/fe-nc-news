import { useState, useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import {useStickyBox} from "react-sticky-box";
import NavLink from "./NavLink"
import { getAllArticles, getSingleArticle } from "../Api";

export default function NavBar({setSingleArticle}){
const stickyRef = useStickyBox({offsetTop: 20, offsetBottom: 20})
const [searchArticle, setSearchArticle] = useState('');
const navigate = useNavigate()


//useEffect to rerender after searchArticle state is changed and make the call to the api to get single article
useEffect(()=>{
    getSingleArticle(searchArticle)
    .then((response)=>{
        setSingleArticle(response)
    })

}, [searchArticle])

function handleChange(event){
setSearchArticle(event.target.value)
}

//function to handle submit
function handleSubmit(event){
    event.preventDefault()
    navigate(`/articles/${searchArticle}`)
    //clear the input - not working
    setSearchArticle('')
}

    return (
        <>
        <nav ref={stickyRef}>
            <ul className="nav-items">
                <NavLink linkDestination={'/users'} linkName={'Switch User'} />
                <NavLink linkDestination={'/'} linkName={'Articles Home'} />
                <li>
            <form onSubmit={handleSubmit}className="" action="">
            <input onChange={handleChange} type="text" placeholder="Search by article ID..." name="search" required/>
            <button type="submit">View Article</button>
            </form>
            </li>
            <li>
            <form onSubmit={handleSubmit}>
        <label>Search Articles by Topic</label>
        <select>
              <option value="option 1" >
                option 1
              </option>
              <option value="option 2">
                option 2
              </option>
        </select>
        <input type="submit" value="Reset filter" />
      </form>
      </li>    
            </ul>
         </nav>
         </>
    )
}