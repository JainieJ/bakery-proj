import React from "react";
import styled from "styled-components";
import ServicesBcg from "../../img/bg-services.jpg";
import bread from "../../img/bread.svg";
import candy from "../../img/candy.svg";
import cupcake from "../../img/cupcake.svg";

const Services = () => {
  return (
    <ServicesWrapper className="py-5" img={ServicesBcg}>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-4 text-center">
            <img src={bread} alt="bread" className="logo" />
            <h4 className="my-3 text-capitalize">bread</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, nisi. Officia, vel a repudiandae at optio suscipit
              tenetur quidem commodi autem. Reiciendis est corporis earum.
            </p>
          </div>
          <div className="col-10 mx-auto col-md-4 text-center">
            <img src={candy} alt="bread" className="logo" />
            <h4 className="my-3 text-capitalize">candy</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, nisi. Officia, vel a repudiandae at optio suscipit
              tenetur quidem commodi autem. Reiciendis est corporis earum.
            </p>
          </div>
          <div className="col-10 mx-auto col-md-4 text-center">
            <img src={cupcake} alt="bread" className="logo" />
            <h4 className="my-3 text-capitalize">cupcake</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, nisi. Officia, vel a repudiandae at optio suscipit
              tenetur quidem commodi autem. Reiciendis est corporis earum.
            </p>
          </div>
        </div>
      </div>
    </ServicesWrapper>
  );
};

export default Services;

const ServicesWrapper = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url(${props => props.img}) center/cover no-repeat fixed;
  .logo {
    height: 8rem;
    width: 8rem;
  }
  h4 {
    color: var(--mainWhite);
  }
  p {
    color: var(--mainWhite);
  }
`;
