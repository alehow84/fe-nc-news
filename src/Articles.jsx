import { useState, useEffect } from "react"
import { getAllArticles } from "./Api"
import ArticlesCard from "./ArticlesCard"

export default function Articles(){
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        getAllArticles()
        .then((response)=>{
            setArticles(response.articles)
        })
    }, [])
    
    return (
        <ArticlesCard articles={articles}/>
    )
}