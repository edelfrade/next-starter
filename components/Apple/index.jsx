import PropTypes from "prop-types";
import { Container } from "./styles";

const Apple = ({ img, alt, copy, bold }) => (
  <Container {...{ bold }}>
    <img src={img} {...{ alt }} />
    <p>{copy}</p>
  </Container>
);
Apple.defaultProps = {
  copy: "Welcome to apple",
  img: "/static/images/taller-logo.png",
  alt: "Apple Logo",
  bold: false
};
Apple.propTypes = {
  copy: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  bold: PropTypes.bool
};
export default Apple;
