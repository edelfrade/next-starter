import styled from "styled-components";
import { Variables } from "../../styles/Theme";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
`;

const Logo = styled.div`
  width: ${Variables.gap}px;
  height: ${Variables.gap}px;
  position: relative;
  background-color: #000;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    margin: 0 auto;
  }
`;

const Nav = styled.nav`
  height: 100%;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    li {
      margin: 0 25px;
      &.active {
        font-weight: bold;
      }
    }
  }
`;

export { Container, Logo, Nav };
