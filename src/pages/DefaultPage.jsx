import React from "react";
import Hero from "../components/Hero";
import defaultBcg from "../img/defaultBcg.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DefaultPage = () => {
  return (
    <DefaultWrapper>
      <Hero img={defaultBcg} fullHeight="true">
        <div className="default-title">
          <h3 className="error">404</h3>
          <h3>page not found</h3>
        </div>
        <Link to="/" className="main-link">
          back home
        </Link>
      </Hero>
    </DefaultWrapper>
  );
};

export default DefaultPage;

const DefaultWrapper = styled.div`
  .default-title {
    margin-bottom: 3rem;
    margin-top: -8rem;
  }
  h3 {
    font-size: 2.5rem;
    text-transform: capitalize;
  }
  .error {
    color: var(--mainPink);
  }
`;
