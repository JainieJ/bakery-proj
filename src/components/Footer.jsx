import React from "react";
import styled from "styled-components";
import { socialLinks } from "./../context/socialLinks";
import { contactInfo } from "./../context/contactInfo";

const Footer = () => {
  return (
    <FooterWrapper className="div container-fluid">
      <div className="row">
        <div className="col-md-6 text-center social-links">
          <h3 className="social-title">sweet house</h3>
          <div className="icon-container d-flex justify-content-between">
            {socialLinks.map((link, index) => {
              return (
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="social-icon"
                >
                  {link}
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-md-6 text-center contact-info">
          <h3 className="contact-title">contact</h3>
          {contactInfo.map(item => {
            return (
              <div
                className="d-flex align-items-center contact-container"
                key={item.id}
              >
                <span className="contact-icon">{item.icon}</span>
                <p className="mb-0 ml-3">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.section`
  .social-links {
    background: var(--mainBlack);
  }
  .contact-info {
    background: var(--mainGrey);
  }
  .social-title {
    color: var(--mainPink);
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 3rem;
  }
  .contact-title {
    color: var(--mainBlack);
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: bold;
    margin-top: 3rem;
  }
  .icon-container {
    margin: 3rem;
  }
  .contact-container {
    margin: 2rem 4rem;
  }
  .social-icon {
    font-size: 2.5rem;
    color: var(--mainWhite);
  }
  .social-icon:hover {
    color: var(--mainPink);
  }
  .contact-icon {
    font-size: 1.8rem;
  }
`;
