import styled from "styled-components";
import { shade } from "polished";

export const ActionBar = styled.div`
  position: sticky;
  top: 10px;
  background-color: ${(props) => props.theme.cards};
  width: clamp(300px, 98%, 850px);
  height: 60px;
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 0 15px;
  box-shadow: 4px 7px 18px -2px rgba(0,0,0,0.53);
  box-shadow: inset;
  transition: 300ms;
  z-index: 2;
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &:hover {
    background-color: ${props => {
      let color;

      if (props.colored)
        color = props.theme.secundary;
      else
        color = props.theme.hover;
      return shade(0.2, color);
    }};
    cursor: pointer;
  }
`;

export const TasksList = styled.div`
  width: clamp(300px, 98%, 850px);
  background-color: ${props => props.theme.cards};
  display: flex;
  flex-direction: column;
  padding: 15px;
  row-gap: 15px;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 5px;
  transition: 300ms;
`;

export const TaskCard = styled.div`
  width: 97%;
  border: 1px solid #888;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AddCard = styled.div`
  position: fixed;
  top: ${props => props.show ? "15%" : "-100%"};
  left: 50%;
  width: clamp(300px, 90%, 600px);
  height: 25rem;
  background-color: ${props => props.theme.cards};
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  transition: 300ms;

  z-index: 3;

  box-shadow: 4px 7px 18px -2px rgba(0,0,0,0.53);
  box-shadow: inset;

  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
`;

export const Campo = styled.input`
  font-size: 12pt;
  background-color: ${props => props.theme.hover};
  color: ${props => props.theme.text};
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 5px 10px;
`;

export const Description = styled.textarea`
  font-size: 12pt;
  background-color: ${props => props.theme.hover};
  color: ${props => props.theme.text};
  border: none;
  border-radius: 5px;
  padding: 10px;
  height: 140px;
  resize: none;
`;

export const Checkbox = styled.input`
  height: 20px;
  width: 20px;

  &[type="checkbox"] {
    filter: hue-rotate(80deg) ${props => props.theme.name === "Light" ? "" : "invert(70%);"}
  }
  
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  transition: 300ms;
  height: 60px;
  width: 60px;
  border-radius: 50px;

  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;
