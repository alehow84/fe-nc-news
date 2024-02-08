import { ExternalLink } from 'react-external-link'

export default function Footer(){
    return (
        <footer>This project was coded by
            <ExternalLink href="https://www.linkedin.com/in/alexandra-howlett-2b4a90136/"> Alex Howlett, </ExternalLink>
             open-sourced on
            <ExternalLink href="https://github.com/alehow84/nc-news.git"> Github </ExternalLink>
            and hosted on <ExternalLink href="https://render.com/">Render</ExternalLink>
        </footer>
    )
}