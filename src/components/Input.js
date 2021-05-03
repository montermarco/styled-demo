import styled from 'styled-components';

export const Input = styled.input.attrs( props => ({
  type: props.type || 'text',
  placeholder: props.placeholder || 'Ingresa un valor'
}))`
  font-size: 1rem;
  padding: .5rem;
  border: solid 1px green;
`;

