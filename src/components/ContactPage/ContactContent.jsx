import React from "react";
import styled from "styled-components";
import Title from "./../Title";

const ContactContent = () => {
  return (
    <ContactContentWrapper className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 col-lg-6 text-center">
          <Title text="contact" spanText="us" />
          <form
            action="https://formspree.io/berseneva.evgeniya@gmail.com"
            method="POST"
            className="mt-5"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                name="name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="mail@mail.com"
                name="mail"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="subject"
                name="subject"
              />
            </div>
            <div className="form-group">
              <textarea
                cols="30"
                rows="10"
                className="form-control"
                placeholder="Dear friends"
                name="message"
              />
            </div>
            <div>
              <button
                className="btn btn-block contact-btn"
                type="submit"
                value="Send"
              >
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContactContentWrapper>
  );
};

export default ContactContent;

const ContactContentWrapper = styled.div`
  .contact-btn {
    background: var(--mainGrey);
    text-transform: capitalize;
    color: var(--mainBlack);
    font-size: 1.5rem;
    font-weight: bold;
  }
  .contact-btn:hover {
    color: var(--mainPink);
  }
`;
