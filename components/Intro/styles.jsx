import styled from "styled-components";
import { Variables } from "../../styles/Theme";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: -1;
  opacity: 0;
  transition: opacity ease 0.4s, z-index ease 0.4s 0.4s;
  &.active {
    opacity: 1;
    z-index: 3;
    transition: opacity ease 0.4s, z-index ease 0s 0s;
  }
`;

const TopBar = styled.div`
  width: 100%;
  height: ${Variables.gap}px;
  background: #000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -${Variables.gap - 10}px;
  transition: top ease 0.5s 0.4s;
  &.active {
    top: 0;
  }
  img {
    height: 45%;
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
  min-height: 100vh;
  margin: -${Variables.gap}px 0 0 0;
  transition: all ease 0.5s 0.4s;
  &.active {
    min-height: calc(100vh - ${Variables.gap}px);
    margin: 7px ${Variables.gap}px 0;
    .intro-apple {
      img {
        height: 100%;
        opacity: 1;
      }
      p {
        margin-top: 110px;
        opacity: 1;
      }
    }
    .year {
      opacity: 1;
    }
  }
  .intro-apple {
    img {
      height: 50%;
      opacity: 0;
      transform-origin: top center;
      transition: all ease 0.5s 0.5s;
    }
    p {
      margin-top: 400px;
      opacity: 0;
      transition: all ease 0.5s 0.5s;
    }
  }
  .year {
    width: 100%;
    text-align: center;
    margin: 50px 0 0;
    opacity: 0;
    transition: all ease 0.5s 0.5s;
    h2 {
      font-size: 70px;
      font-family: "Poppins";
      font-weight: 500;
    }
  }
`;

export { Container, TopBar, Content };
