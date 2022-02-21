import styled from "styled-components";
import { ButtonForm } from "../../Form/styled";

export const GreetingContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 100%;
  div {
    width: 50%;
    margin: 15px;
  }
  h2 {
    font-size: 60px;
    margin: 0;
  }

  @media (max-width: 540px) {
    display: flex;
    align-items: unset;
    justify-content: unset;
    flex-direction: column;
    div {
      width: 100%;
      margin: 15px;
    }
  }
  @media (max-width: 270px) {
    position: fixed;
  }
`;

export const ButtonGreeting = styled(ButtonForm)`
  width: 150px;
  margin-bottom: 12px;
`;
