import React from "react";
import styled from "styled-components";

const Hero = ({ text, children, img, spanText, fullHeight }) => {
  return (
    <HeroWrapper className="container-fluid" img={img} height={fullHeight}>
      <div className="row align-items-center banner">
        <div className="col text-center">
          <h1 className="banner-text text-capitalize mb-5">
            {text} <strong className="span-text">{spanText}</strong>
          </h1>
          {children}
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  .banner {
    background: linear-gradient(
        rgba(249, 228, 148, 0.3),
        rgba(249, 228, 148, 0.4)
      ),
      url(${props => props.img}) center/cover no-repeat fixed;
    min-height: ${props => (props.height ? "90vh" : "60vh")};
  }
  .banner-text {
    color: var(--mainWhite);
    font-size: 4rem;
  }
  .span-text {
    color: var(--mainPink);
    font-size: 4.5rem;
  }
`;
