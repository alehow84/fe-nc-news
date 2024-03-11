import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import User from "./User";

export default function Header({ header }) {
  return (
    <Container id="header">
      <Row>
        <Col xs={10}>
          <h1 className="header-text">{header}</h1>
        </Col>
        <Col>
          <User />
        </Col>
      </Row>
    </Container>
  );
}
