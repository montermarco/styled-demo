import styled from 'styled-components';

const color = 'red';
const padding = 'padding:1rem';
const margin = 'margin:1rem';
const border = (width = '3px') => {
  return `border: solid ${width} blue`
};

export const Button = styled.button`
  ${padding};
  ${margin};
  background-color: ${ ({color}) => color ? color : 'var(--primary)'};
  width: 30%;
  color: white;
  border-radius: 10px;
  ${border('7px')};

  ${ ({ cancel }) => {
    if(cancel){
      return `
        background: red;
        border: solid 2px gray;
        border-radius: 40px;
        padding: 0;
      `
    }
  }}
`;

export const Button2 = styled.button`
  background-color: ${color};
  width: 30%;
  color: white;
  border-radius: 10px;
  ${border()};
`;