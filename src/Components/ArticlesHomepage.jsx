import { useState, useEffect } from "react"
import { getAllArticles } from "../Api"
import ArticlesCard from "./ArticlesCard"
import LoadingComponent from "./LoadingComponent"
import ErrorComponent from "./ErrorComponent"

export default function ArticlesHomepage({setSingleArticle}){
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        getAllArticles()
        .then((response)=>{
            setArticles(response.articles)
            setIsLoading(false)
        })
        .catch(()=>{
            setIsError(true)
        })
    }, [])
    
    if(isLoading) (<LoadingComponent/>)
    if(!Error) (<ErrorComponent/>)
    return (
    <ArticlesCard articles={articles} setSingleArticle={setSingleArticle}/>
    )
}