import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 40px 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  ${mobile({ flexDirection: "column" })}
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mobile({ marginBottom: "30px" })}
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin: 0 20px 20px 20px;
  text-align: center;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #ff8c00;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ListItem = styled.li`
  font-size: 1rem;
  margin-bottom: 10px;
  margin-right: 20px;
  color: #fff;

  &:last-child {
    margin-right: 0;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Payment = styled.img`
  width: 50%;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Logo>E-PERFUME.</Logo>
      <Desc>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don’t look even slightly believable.
      </Desc>
      <SocialContainer>
        <SocialIcon color="3B5999">
          <Facebook />
        </SocialIcon>
        <SocialIcon color="E4405F">
          <Instagram />
        </SocialIcon>
        <SocialIcon color="55ACEE">
          <Twitter />
        </SocialIcon>
        <SocialIcon color="E60023">
          <Pinterest />
        </SocialIcon>
      </SocialContainer>
      <Row>
        <Column>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Perfumes</ListItem>
            <ListItem>Woman Perfumes</ListItem>
            <ListItem>Baby Perfumes</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Column>
        <Column>
          <Title>Category</Title>
          <List>
            <ListItem>Perfumes</ListItem>
            <ListItem>Cologne</ListItem>
            <ListItem>Body Spray</ListItem>
            <ListItem>Deodorant</ListItem>
          </List>
        </Column>
        <Column>
          <Title>Support</Title>
          <List>
            <ListItem>Contact Us</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Terms of Use</ListItem>
            <ListItem>FAQ</ListItem>
          </List>
        </Column>
        <Column>
          <Title>Contact Us</Title>
          <ContactContainer>
            <ContactItem>
              <Room style={{ marginRight: "10px" }} />
              1234 Street Name, City Name, United States
            </ContactItem>
            <ContactItem>
              <Phone style={{ marginRight: "10px" }} />
              +1 234 567 890
            </ContactItem>
            <ContactItem>
              <MailOutline style={{ marginRight: "10px" }} />
              contact@eperfume.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </ContactContainer>
        </Column>
      </Row>
    </Container>
  );
};
export default Footer;
