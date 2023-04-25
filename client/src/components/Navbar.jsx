import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  ${mobile({ padding: "0 10px" })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-right: 20px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid #ddd;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  margin-left: 5px;
  font-size: 14px;
  color: #333;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: #333;
  margin: 0;
  ${mobile({ fontSize: "20px" })}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;

  &:hover {
    color: #ff8c00;
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const CartIcon = styled(ShoppingCartOutlined)`
  font-size: 24px;
  margin-left: 25px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #ff8c00;
  }

  ${mobile({ fontSize: "20px", marginLeft: "10px" })}
`;

const BadgeContainer = styled.div`
  position: relative;
`;

const BadgeNumber = styled.span`
  position: absolute;
  top: -8px;
  right: -10px;
  background-color: #ff8c00;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>E-PERFUME</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem to="/login">LOGIN</MenuItem>
          <MenuItem to="/register">REGISTER</MenuItem>
          <Link to="/cart">
            <BadgeContainer>
              <CartIcon />
              <BadgeNumber>{quantity}</BadgeNumber>
            </BadgeContainer>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
