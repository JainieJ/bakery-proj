import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Title from "../Title";
import aboutPicture from "../../img/about-picture.jpg";

const Content = () => {
  return (
    <ContentWrapper className="container">
      <div className="row align-items-center">
        <div className="col-10 mx-auto col-md-6 my-5">
          <div className="mt-5">
            <Title text="about" spanText="us" />
          </div>
          <p className="text-muted mt-3 mb-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            delectus cumque voluptatum amet, saepe sint omnis fugit eaque quis
            temporibus nihil architecto quam tempore perferendis qui. Obcaecati
            sed corrupti magnam?
          </p>
          <div className="my-5">
            <Link to="/products" className="main-link">
              our products
            </Link>
          </div>
        </div>
        <div className="col-10 mx-auto col-md-6 my-5">
          <div className="img-container ml-5">
            <img src={aboutPicture} alt="about company" className="img-fluid" />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Content;

const ContentWrapper = styled.div`
  .row {
    min-height: 60vh;
  }
  .img-container {
    position: relative;
  }
  .img-container:before {
    content: "";
    position: absolute;
    top: -1.7rem;
    left: -1.7rem;
    width: 100%;
    height: 100%;
    outline: 0.5rem solid var(--mainYellow);
    z-index: -1;
    transition: all 1s linear;
  }
  .img-container:hover:before {
    top: 0;
    left: 0;
  }
`;
