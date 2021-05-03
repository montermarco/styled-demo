import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Header = () => {
  return (
    <Wrapper>
      <h5>Kubo Financiero</h5>
      <p>Creditos de 5 a 100 mil pesos <span>En menos de 24hrs</span></p>
      <Button color="orange">Solicitalo ahora ...</Button>
      <Button cancel>o no ...</Button>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  width: 100%;
  background-color: gainsboro;
  height: 25vh;
  transition: all 2s ease-in-out;

  &:hover{
    background-color: blue;
  }

  h5{
    font-size: 2rem;
    color: var(--text);

    &:hover{
      font-size: 3rem;
      color: var(--primary);
    }
  }

  p{
    font-size: 1.5rem;
    color: black;

    span{
      font-style: italic;
      color: green;
    }
  }

`;

export default Header
