import { Container, TopBar, Content } from './styles';

const Intro = ({ onClick, className}) => (
    <Container {...{ className, onClick}} >
        <TopBar><img src="/static/images/logo.png" alt=""/></TopBar>
        <Content>
            <p>New products coming this summer</p>
        </Content>
    </Container>
)

export default Intro;