import PropTypes from "prop-types";
import { Container } from "./styles";

const Apple = ({ img, alt, copy, bold, className }) => (
  <Container {...{ bold, className }}>
    <img src={img} {...{ alt }} />
    <p>{copy}</p>
  </Container>
);
Apple.defaultProps = {
  className: "apple-cmp",
  copy: "Welcome to apple",
  img: "/static/images/taller-logo.png",
  alt: "Apple Logo",
  bold: false
};
Apple.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  bold: PropTypes.bool
};
export default Apple;
