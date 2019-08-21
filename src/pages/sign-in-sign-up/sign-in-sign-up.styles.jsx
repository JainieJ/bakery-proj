import styled from "styled-components";
import contactBcg from "../../img/contactBcg.jpg";

export const SignInAndSignUpContainer = styled.div`
  background-image: linear-gradient(
    to right bottom,
    rgba(142, 123, 117, 0.3),
    rgba(142, 123, 117, 0.7)
  );
  padding: 5rem 0;
`;

export const FormContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 3rem;
  background-image: linear-gradient(
      rgb(255, 255, 255, 0.6),
      rgb(255, 255, 255, 0.7)
    ),
    url(${contactBcg});
  background-position: center;
  background-size: cover;
`;
