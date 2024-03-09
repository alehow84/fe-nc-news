import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./CSS/App.css";
import background from "./assets/squiggle_lines_pattern_background.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Components/Header";
import ArticlesHomepage from "./Components/ArticlesHomepage";
import SingleArticle from "./Components/SingleArticle";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import TopicalArticles from "./Components/TopicalArticles";

// import { useContext } from 'react'
import UserContext from "./Context/UserContext";

function App() {
  const [header, setHeader] = useState("Welcome to NC News 💬");
  const [singleArticle, setSingleArticle] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
  });

  /*
For Q11
- pass setArticles as props to Navbar for use in OrderToggle Button - done
*/

  return (
    <UserContext.Provider value={loggedInUser}>
      <Container className="App-layout">
        <Row>
          <Col>
            <Header header={header} />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <NavBar
              setSingleArticle={setSingleArticle}
              setArticles={setArticles}
            />
          </Col>
          <Col>
            <Routes>
              <Route
                path={"/"}
                element={
                  <ArticlesHomepage
                    setSingleArticle={setSingleArticle}
                    articles={articles}
                    setArticles={setArticles}
                  />
                }
              />
              <Route
                path={"/articles/:article_id"}
                element={
                  <SingleArticle
                    setHeader={setHeader}
                    singleArticle={singleArticle}
                  />
                }
              />
              <Route
                path={"/articles/topics/:topic"}
                element={<TopicalArticles articles={articles} />}
              />
            </Routes>
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </UserContext.Provider>
  );
}

export default App;
