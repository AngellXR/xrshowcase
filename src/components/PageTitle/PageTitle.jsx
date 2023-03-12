import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

const StyledPageTitle = styled.div`
  position: relative;
  left: 0%;
  right: 0%;
  top: 0%;
  // bottom: 1.28%;

  font-family: Lora; serif;
  display : flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 4px black;
  font-style: normal;
  font-weight: bold;
  font-size: 12vmin;
  line-height: 12vmin;
  /* identical to box height */
background-color: #F9F3CF;
  border-radius: 10px 10px 10px 10px;
  color: #064ACB;
`;

export default function PageTitle({ props }) {
  return <StyledPageTitle>XR Showcase</StyledPageTitle>;
}
