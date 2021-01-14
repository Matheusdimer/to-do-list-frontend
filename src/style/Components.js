import styled from "styled-components";
import { shade } from "polished";

export const ActionBar = styled.div`
  position: fixed;
  top: 90px;
  background-color: ${(props) => props.theme.cards};
  width: clamp(420px, 70%, 1000px);
  height: 60px;
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: 0 15px;
  box-shadow: 4px 7px 18px -2px rgba(0,0,0,0.53);
  box-shadow: inset;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.colored ? props.theme.secundary : props.theme.hover};
  color: ${props => props.colored ? "#fff" : props.theme.text};
  padding: 0 10px 0 10px;
  ${props => props.width ? `width: ${props.width};` : null}
  font-size: 12pt;
  transition: 300ms;
  height: 30px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: ${props => {
      let color;

      if (props.colored)
        color = props.theme.secundary;
      else
        color = props.theme.hover;
      return shade(0.2, color);
    }}
  }
`;

export const TasksList = styled.div`
  width: clamp(420px, 70%, 1000px);
  background-color: ${props => props.theme.cards};
  display: flex;
  flex-direction: column;
  padding: 15px;
  row-gap: 15px;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 5px;
`;

export const TaskCard = styled.div`
  width: 97%;
  border: 1px solid #888;
  padding: 15px;
  border-radius: 5px;
`;
