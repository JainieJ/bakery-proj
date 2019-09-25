import styled from "styled-components";

export const SideCartContainer = styled.div`
  position: fixed;
  top: 89px;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--mainViolet);
  z-index: 1;
  border-left: 3px solid var(--mainPink);
  transition: var(--mainTransition);
  transform: ${props => (!props.closed ? "translateX(0)" : "translateX(100%)")};
  overflow-y: scroll;
  text-align: center;
  @media (min-width: 768px) {
    max-width: 22rem;
  }
`;

export const CartTotalContainer = styled.p`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.button`
  border: 3px solid var(--mainBlack);
  padding: 1rem;
  border-radius: 0.3rem;
  text-transform: capitalize;
  font-size: 1.5rem;
  color: var(--mainBlack);
  background: transparent;
  margin-bottom: 8rem;
  &:hover {
    background: var(--mainBlack);
    color: var(--mainPink);
    text-decoration: none;
  }
`;
