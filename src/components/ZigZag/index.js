import styled from "styled-components";

const svg = styled.svg`
  color: lightblue;
`;

const path = styled.path`
  fill: currentColor;
`;

export const ZigZag = styled.div`
  background-color: white;
  width: auto;
  padding-bottom: 8px;
  background: 0 bottom repeat-x
    url("data:image/svg+xml;utf-8,<?xml version='1.0' encoding='utf-8'?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='9px' height='6px' viewBox='0 0 9 6' enable-background='new 0 0 9 6' xml:space='preserve'><polygon fill='lightblue' points='4.5,4.5 0,0 0,1.208 4.5,5.708 9,1.208 9,0 '/></svg>");
  ${svg} {
    ${path};
  }
`;

export default ZigZag;
