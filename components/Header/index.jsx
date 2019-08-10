import { Container, Logo, Nav } from "./styles";
import Button from "../elements/Button";

const Header = ({ onClick, className }) => (
  <Container {...{ className }}>
    <Logo {...{ onClick }}>
      <img src="/static/images/logo.png" alt="" />
    </Logo>
    <Nav>
      <ul>
        <li className="active">iPone</li>
        <li>Macbook Pro</li>
        <li>Watch</li>
        <li>
          <Button color="#fff" borderColor="transparent">
            Notify Me
          </Button>
        </li>
      </ul>
    </Nav>
  </Container>
);

export default Header;
