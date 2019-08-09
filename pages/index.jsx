import React from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

const Home = styled.div`
`;
const PageIntro = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  h1,a, div{
    width: 100%;
  }
  h1{
    text-align: center;
  }
  a{
    text-align: center;
  }

  div{
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: space-between;
    a{
      width: auto;
    }
  }
`;

const Page = styled.div`
    height: calc(100vh - 80px);
    background-color: #fff;
    .heading{
      width: 100%;
      background-color: #ebebeb;
      padding: 30px 40px;
      h3{
        font-size: 18px;
        color: red;
      }
      h2{
        font-size: 70px;
        font-weight: bold;
      }
      p{
        color: #a5a5a5;
      }
    }
    .phones{
      .pricing{
        h4{
          color: #a5a5a5;
          font-size: 25px;
        }
        a{
          color: red;
        }
      }
      .options{

      }
    }
`;


const Homepage = () => (
  <Home>
    <PageIntro>
      <h1>Welcome to Apple</h1>
      <a href="">See our products</a>
      <div>
        <a href="#phones">phone</a>
        <a href="#phones">tablet</a>
        <a href="#phones">laptop</a>
      </div>
    </PageIntro>
    <ScrollableAnchor id="phones">
      <Page>
          <div className="heading">
            <h3>iPhone</h3>
            <h2>The ultimage<br />iPhone</h2>
            <p>The future is here. Join the iPhone Upgrade Program to get the latest iPhone - NOW</p>
          </div>
          <div className="phones">
            <div className="pricing">
              <h4>From $699</h4>
              <a>Buy Now ></a>
            </div>
            <div className="options">
              
            </div>
          </div>
      </Page>
    </ScrollableAnchor>
  </Home>
);

export default Homepage;
