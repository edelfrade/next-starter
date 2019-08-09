import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 2;
`;

const TopBar = styled.div`
    width: 100%;
    height: 80px;
    background: #000;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        height: 60%;
        width: auto;
        margin: 0;
    }
`;

const Content = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 80px);
`;

export { Container, TopBar, Content };