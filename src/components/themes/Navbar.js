import React from "react";
import styled from "styled-components";
import Title from "./Title";
const Navbar = ({ children }) => {
  return (
    <NavbarWrapper>
      <Title title="Kubo Financiero" />
      {children}
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  //background: ${props => props.theme.primaryColor};
  background: #404042;
  ${props => `color:${props.theme.secondaryColor}`};
  padding: 1rem;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
`;

export default Navbar;