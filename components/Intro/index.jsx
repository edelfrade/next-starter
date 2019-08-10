import { Container, TopBar, Content } from "./styles";

const Intro = ({ onClick, active }) => (
  <Container className={active ? "active" : ""} {...{ onClick }}>
    <TopBar className={active ? "active" : ""}>
      <img src="/static/images/logo.png" alt="" />
    </TopBar>
    <Content className={active ? "active" : ""}>
      <div className="apple">
        <img src="/static/images/taller-logo.png" alt="" />
        <p>New Products Coming This Summer</p>
      </div>
      <div className="year">
        <h2>2019</h2>
      </div>
    </Content>
  </Container>
);

export default Intro;
