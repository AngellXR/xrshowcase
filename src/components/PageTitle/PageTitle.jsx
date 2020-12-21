import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

const StyledPageTitle = styled.div`
  position: relative;
  left: 2%;
  right: 0%;
  top: 0%;
  bottom: 1.28%;

  font-family: Lora; serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12vmin;
  line-height: 12vmin;
  /* identical to box height */

  color: #030303;
`;

export default function PageTitle({ props }) {
  return <StyledPageTitle>XR Collective</StyledPageTitle>;
}
