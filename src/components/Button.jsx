import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(prop) =>
    prop.children === "Primary Button" ? "#2490fe" : "white"};
  color: ${(prop) => (prop.children === "Link Button" ? "#0b07e5" : "black")};
  padding: 10px 20px;
  border: none;
  margin: 10px;
  box-shadow: ${(prop) =>
    prop.children === "Default Button"
      ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      : "none"};
  border: ${(prop) =>
    prop.children === "Dashed Button" ? "1px dashed black" : "none"};
`;
