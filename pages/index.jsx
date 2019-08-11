import React, { useState } from "react";
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";
import Apple from "../components/Apple/";
import Range from "../components/elements/Range";

const Home = styled.div``;

const PageIntro = styled.div`
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
  .see-all {
    width: 100%;
    margin-top: 100px;
    font-size: 20px;
  }
  .devices {
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      margin: 0 20px;
    }
  }
`;

const Page = styled.div`
  height: calc(100vh - 80px);
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
        transform: translateX(200%);
        opacity: 0;
        transition: all ease 0.5s;
        &.active {
          transform: translateX(0);
          transition: all ease 0.5s;
          opacity: 1;
        }
      }
    }
  }
`;

const Homepage = () => {
  const [option, setOption] = useState(0);
  const okChange = e => {
    setOption(parseInt(e.target.value));
  };
  return (
    <Home>
      <PageIntro>
        <Apple
          img="/static/images/taller-logo-grey.png"
          copy="Welcome to Apple"
          bold
        />
        <a className="see-all" href="#phones">
          See our products
        </a>
        <div className="devices">
          <a href="#phones">
            <img src="/static/images/phone.png" alt="Phone" />
          </a>
          <a href="#phones">
            <img src="/static/images/mac.png" alt="Laptop" />
          </a>
          <a href="#phones">
            <img src="/static/images/watch.png" alt="Watch" />
          </a>
        </div>
      </PageIntro>
      <ScrollableAnchor id="phones">
        <Page>
          <div className="heading">
            <h3>iPhone</h3>
            <h2>
              The ultimage
              <br />
              iPhone
            </h2>
            <p>
              The future is here. Join the iPhone Upgrade Program to get the
              latest iPhone - NOW
            </p>
            <img src="/static/images/taller-logo-grey.png" alt="" />
          </div>
          <div className="phones">
            <div className="pricing">
              <h4>From $699</h4>
              <a>Buy Now ></a>
            </div>
            <div className="options">
              <div className="variants">
                <img
                  className={option === 0 ? "active" : ""}
                  src="/static/images/iphone.png"
                  alt=""
                />
                <img
                  className={option === 1 ? "active" : ""}
                  src="/static/images/iphone-back.png"
                  alt=""
                />
              </div>
              <div className="slider">
                <Range min="0" max="1" value={option} onChange={okChange} />
              </div>
            </div>
          </div>
          <div className="large-phones">
            <div className="variants">
              <img
                className={option === 0 ? "active" : ""}
                src="/static/images/iphone-large.png"
                alt=""
              />
              <img
                className={option === 1 ? "active" : ""}
                src="/static/images/iphone-back-large.png"
                alt=""
              />
            </div>
          </div>
        </Page>
      </ScrollableAnchor>
    </Home>
  );
};

export default Homepage;
