import { ExternalLink } from 'react-external-link'

export default function Footer(){
    return (
        <footer>This project was coded by
            <ExternalLink href="https://www.linkedin.com/in/alexandra-howlett-2b4a90136/"> Alex Howlett, </ExternalLink>
             open-sourced on
            <ExternalLink href="https://github.com/alehow84/nc-news.git"> Github </ExternalLink>
            and hosted on <ExternalLink href="https://render.com/">Render</ExternalLink>
            <div className="footer-img-ref"><ExternalLink href="https://www.freepik.com/free-vector/squiggle-lines-pattern-background_59539242.htm#page=5&query=black%20and%20white%20abstract%20pattern&position=35&from_view=keyword&track=ais&uuid=c9ddac06-fae1-45f3-bf9d-a09339069e91">Background Image by juicy_fish</ExternalLink> on Freepik</div>
        </footer>
    )
}