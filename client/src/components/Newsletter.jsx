import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #000;
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  color: #000;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-size: 16px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #ff8c00;
  color: white;
  border-radius: 5%;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Subscribe to our Newsletter</Title>
      <Desc>Stay updated with our latest news and offers</Desc>
      <InputContainer>
        <Input type="email" placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
