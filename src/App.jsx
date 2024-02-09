import { useState } from 'react'
import './CSS/App.css'
import Header from './Components/Header'
import ArticlesHomepage from './Components/ArticlesHomepage'
import SingleArticle from './Components/SingleArticle'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from './Context/UserContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [header, setHeader] = useState("Welcome to NC News 💬")
  const [singleArticle, setSingleArticle] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({
    "username": "jessjelly",
    "name": "Jess Jelly",
    "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
    })

  return (
    <UserContext.Provider value={loggedInUser}>
      <Container className="App" >
      <Row>
        <Col><Header header={header}/></Col>
      </Row>
      <Row>
        <Col xs={3}><NavBar setSingleArticle={setSingleArticle}/></Col>
        <Col>
        <Routes>
        <Route path={"/"} element={<ArticlesHomepage setSingleArticle={setSingleArticle}/>}/>
        <Route path={"/articles/:article_id"} element={<SingleArticle setHeader={setHeader} singleArticle={singleArticle}/>}/>
       </Routes>
        </Col>
      </Row>
      <Row>
        <Col><Footer/></Col>
      </Row>
    </Container>
    </UserContext.Provider>
  )
}



export default App
