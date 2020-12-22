import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

const StyledCardTitle = styled.div`
  /* cardTitle */

  position: static;
  width: 280px;
  height: 49px;
  left: 12px;
  top: 12px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0;

  font-family: "Lora", serif;
  font-style: normal;
  font-weight: bold;
  // font-size: 2.5vh;
  // replaced with this clamp model found online for min max css
  font-size: clamp(17px, 4vh, 25px);
  line-height: 2em;

  color: #fcfcfc;
`;

export default function CardTitle({ title }) {
  return <StyledCardTitle>{title}</StyledCardTitle>;
}
