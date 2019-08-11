import React, { useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Home, PageIntro, Page } from "../styles/pages/";
import Apple from "../components/Apple/";
import Range from "../components/elements/Range";

const Homepage = ({ introActive }) => {
  const [option, setOption] = useState(0);
  const okChange = e => {
    setOption(parseInt(e.target.value));
  };
  return (
    <Home>
      <PageIntro className={introActive ? "" : "active"}>
        <Apple
          className="page-apple"
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
          <div className="vertical-devices">
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
        </Page>
      </ScrollableAnchor>
    </Home>
  );
};

export default Homepage;
