import { Container, Description, Title } from "./YourGoal.styled";


export const YourGoal = () => {
  return (
    <Container>
      <form>
        <img alt="Goal Image" src="/src/components/YourGoal/img/Illustration Goals-min.svg" />
        <Title>Your goal</Title>
        <Description>Choose a goal so that we can help you effectively</Description>
        <ul>
          <li>
            <input type="radio" id="loseFat" name="goal" value="Lose Fat" />
            <label htmlFor="loseFat">Lose Fat</label>
          </li>
          <li>
            <input type="radio" id="maintain" name="goal" value="Maintain" />
            <label htmlFor="maintain">Maintain</label>
          </li>
          <li>
            <input type="radio" id="gainMuscle" name="goal" value="Gain Muscle"/>
            <label htmlFor="gainMuscle">Gain Muscle</label>
          </li>
        </ul>

        <button type="button">Back</button>
        <button type="submit">Next</button>
      </form>
    </Container>
  );
};
