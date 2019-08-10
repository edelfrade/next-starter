import React from "react";
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";
import Apple from "../components/Apple/";

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
  .heading {
    width: 100%;
    background-color: #ebebeb;
    padding: 30px 40px;
    h3 {
      font-size: 18px;
      color: red;
    }
    h2 {
      font-size: 70px;
      font-weight: bold;
    }
    p {
      color: #a5a5a5;
    }
  }
  .phones {
    .pricing {
      h4 {
        color: #a5a5a5;
        font-size: 25px;
      }
      a {
        color: red;
      }
    }
    .options {
    }
  }
`;

const Homepage = () => (
  <Home>
    <PageIntro>
      <Apple
        img="/static/images/taller-logo-grey.png"
        copy="Welcome to Apple"
        bold
      />
      <a className="see-all" href="">
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
        </div>
        <div className="phones">
          <div className="pricing">
            <h4>From $699</h4>
            <a>Buy Now ></a>
          </div>
          <div className="options" />
        </div>
      </Page>
    </ScrollableAnchor>
  </Home>
);

export default Homepage;
