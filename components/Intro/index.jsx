import { Container, TopBar, Content } from "./styles";
import Apple from "../Apple/";

const Intro = ({ onClick, active }) => (
  <Container className={active ? "active" : ""} {...{ onClick }}>
    <TopBar className={active ? "active" : ""}>
      <img src="/static/images/logo.png" alt="" />
    </TopBar>
    <Content className={active ? "active" : ""}>
      <Apple
        img="/static/images/taller-logo.png"
        copy="New Products Coming This Summer"
      />
      <div className="year">
        <h2>2019</h2>
      </div>
    </Content>
  </Container>
);

export default Intro;
