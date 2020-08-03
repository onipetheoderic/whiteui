import styled from "styled-components";

export const ActiveButton = styled.button`
  color: ${props => props.active ? "white" : "#5E81F4"};
  height: 56px;
  border-radius: 8px;
  text-transform: capitalize;
  font-family: Lato;
  font-weight: bold;
  width: 48%;
  font-size: 14px;
  cursor: pointer;
  outline:none;
  border:none;
  background-color: ${props => props.active ? "#5E81F4" : "linear-gradient(0deg, rgba(94, 129, 244, 0.1), rgba(94, 129, 244, 0.1)), #FFFFFF;"}; 
`;
