import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 361px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  top: 200px;
  width: 100%;
  img {
    position: absolute;
    height: 100%;
    width: auto;
    top: 0;
  }
  p {
    font-size: ${({ bold }) => (bold ? "79px" : "25px")};
    font-family: "Poppins";
    font-weight: ${({ bold }) => (bold ? 700 : 500)};
    z-index: 2;
    margin-top: 110px;
  }
`;

export { Container };
