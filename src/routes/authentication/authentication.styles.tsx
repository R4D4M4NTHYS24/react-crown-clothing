import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    margin: 0px -25px;
    display: block;
    width: 40vw;

    h2 {
      margin: 2rem 0rem;
    }
  }
`;
