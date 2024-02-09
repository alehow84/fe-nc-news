import { useState } from 'react'
import './CSS/App.css'
import Header from './Components/Header'
import ArticlesHomepage from './Components/ArticlesHomepage'
import SingleArticle from './Components/SingleArticle'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [header, setHeader] = useState("Welcome to NC News 💬")
  const [singleArticle, setSingleArticle] = useState([])

  return (
    <>
      {/* <Header header={header}/>
      <NavBar setSingleArticle={setSingleArticle}/>
      <Routes>
        <Route path={"/"} element={<ArticlesHomepage setSingleArticle={setSingleArticle}/>}/>
        <Route path={"/articles/:article_id"} element={<SingleArticle setHeader={setHeader} singleArticle={singleArticle}/>}/>
      </Routes>
      <Footer/> */}
      <Container >
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
    </>
  )
}



export default App
