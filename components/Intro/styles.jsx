import styled from "styled-components";
import { Variables } from "../../styles/Theme";

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
  height: ${Variables.gap}px;
  background: #000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 60%;
    width: auto;
    margin: 0;
  }
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: calc(100vh - ${Variables.gap}px);
  margin: 7px ${Variables.gap}px 0;
  background: rgb(90, 200, 250);
  background: linear-gradient(
    180deg,
    rgba(90, 200, 250, 1) 0%,
    rgba(255, 255, 255, 1) 60%,
    rgba(255, 255, 255, 1) 100%
  );
  .apple {
    position: relative;
    height: 361px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 200px;
    img {
      position: absolute;
      height: 100%;
      width: auto;
      top: 0;
    }
    p {
      font-size: 25px;
      font-family: "Poppins";
      font-weight: 500;
      z-index: 2;
      margin-top: 25%;
    }
  }
  .year {
    width: 100%;
    text-align: center;
    h2 {
      font-size: 80px;
      font-family: "Poppins";
      font-weight: 500;
    }
  }
`;

export { Container, TopBar, Content };
