import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

// const Container = styled.div`
//   display: flex;
//   padding: 20px;
//   justify-content: space-between;
//   ${mobile({ padding: "0px", flexDirection:"column" })}

// `;

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  border-radius: 10px;
  height: 30vh;
  overflow: hidden;
  animation: slideIn 1s ease-in-out;
  align-items: center;

  @keyframes slideIn {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
