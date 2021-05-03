import styled, {keyframes} from 'styled-components';

export const rotate = keyframes`
  0%{
    transform: rotate(0deg)
  }
  50%{
    transform: rotate(360deg)
  }
  100%{
    transform: rotate(-360deg)
  }
`;

export const Box = styled.div`
  margin: 3rem;
  width: 150px;
  height: 150px;
  border: solid 3px blue;
  animation: ${rotate} 5s ease-in-out infinite;
`;