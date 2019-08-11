import styled from "styled-components";

export const Home = styled.div``;

export const PageIntro = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: rgb(242, 242, 242);
  background: linear-gradient(
    90deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  &.active {
    .page-apple {
      p {
        margin-top: 110px;
        opacity: 1;
      }
    }
    .see-all {
      margin-top: 100px;
    }
    .devices {
      transform: scale(1);
    }
  }
  .page-apple {
    p {
      margin-top: -100px;
      opacity: 0;
      transition: all ease 0.5s 0.2s;
    }
  }
  .see-all {
    width: 100%;
    margin-top: 200px;
    font-size: 20px;
    transition: all ease 0.5s 0.2s;
  }
  .devices {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1.5);
    transition: all ease 0.5s 0.2s;
    a {
      margin: 0 20px;
      img {
        width: 50px;
      }
    }
  }
`;

export const Page = styled.div`
  min-height: calc(100vh - 80px);
  background-color: #fff;
  position: relative;
  overflow: hidden;
  .heading {
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(242, 242, 242, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    padding: 100px 76px;
    width: 50%;
    position: relative;
    img {
      position: absolute;
      right: 40px;
      top: 107px;
      z-index: 1;
      width: 154px;
    }
    h2,
    h3,
    p {
      position: relative;
      z-index: 2;
    }
    h3 {
      font-size: 32px;
      line-height: 48px;
      color: #ff3b30;
      font-weight: bold;
      margin: 0 0 20px 18px;
    }
    h2 {
      font-size: 100px;
      line-height: 110px;
      font-weight: 700;
      font-family: "Poppins";
      margin: 0 0 40px 0;
    }
    p {
      font-size: 25px;
      line-height: 35px;
      color: #999999;
      max-width: 612px;
    }
  }
  .phones {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 50%;
    padding: 50px 0 0 0;
    .pricing {
      h4 {
        color: #cccccc;
        font-size: 50px;
        font-family: "Helvetica";
        font-weight: 700;
      }
      a {
        color: #ff3b30;
        font-size: 20px;
        font-weight: 600;
      }
    }
    .options {
      position: relative;
      width: 250px;
      .variants {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32.5px;
        img {
          opacity: 0.2;
          margin: 0;
          transition: opacity ease 0.5s;
          &.active {
            opacity: 1;
            transition: opacity ease 0.5s;
          }
        }
      }
    }
  }
  .large-phones {
    position: absolute;
    right: 40px;
    top: 100px;
    .variants {
      position: relative;
      width: 500px;
      height: 100vh;
      img {
        position: absolute;
        left: 0;
        top: 0;
        transform: translateX(180%);
        opacity: 0;
        transition: all ease 0.7s;
        height: 730px;
        &.active {
          transform: translateX(0);
          opacity: 1;
        }
      }
    }
  }
`;
