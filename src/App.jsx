import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "./CSS/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Components/Header";
import ArticlesHomepage from "./Components/ArticlesHomepage";
import SingleArticle from "./Components/SingleArticle";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import TopicalArticles from "./Components/TopicalArticles";
import UserContext from "./Context/UserContext";
import ErrorComponent from "./Components/ErrorComponent";

function App() {
  const [header, setHeader] = useState("Welcome to NC News 💬");
  const [singleArticle, setSingleArticle] = useState([]);
  const [articles, setArticles] = useState([]);
  const [topicalArticles, setTopicalArticles] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
  });
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
              topicalArticles={topicalArticles}
              setTopicalArticles={setTopicalArticles}
            />
          </Col>
          <Col>
            <Routes>
              <Route path={"/"} element={<ErrorComponent />} />
              <Route
                path={"/home"}
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
                element={
                  <TopicalArticles
                    articles={articles}
                    topicalArticles={topicalArticles}
                    setTopicalArticles={setTopicalArticles}
                  />
                }
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
