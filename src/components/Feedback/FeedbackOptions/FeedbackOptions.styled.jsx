import styled from 'styled-components';


export const List = styled.ul`
display: flex;
gap:20px;
justify-content: center;
align-items: center;

`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  width: 100px;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: ${({ name, theme }) => {
     switch (name) {
       case 'good':
         return theme.colors.green;
       case 'neutral':
         return theme.colors.blue;
       case 'bad':
         return theme.colors.red;
       default:
         return '#fff';
     }
}}

  
`;