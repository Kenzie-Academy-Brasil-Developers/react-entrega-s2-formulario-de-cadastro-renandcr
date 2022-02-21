import { useParams } from "react-router-dom";
import { GreetingContainer, ButtonGreeting } from "./styled";

const Greeting = ({ handleRoteRoot }) => {
  const { id } = useParams();
  return (
    <GreetingContainer>
      <ButtonGreeting onClick={handleRoteRoot}>Voltar</ButtonGreeting>

      <div>
        <h2>Seja bem vindo {id}</h2>
      </div>
    </GreetingContainer>
  );
};
export { Greeting };
