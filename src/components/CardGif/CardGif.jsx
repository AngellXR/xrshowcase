import React from "react";
import styled from "styled-components";

const StyledCardGif = styled.div`
  position: relative;
  width: 300px;
  height: 287px;
  left: 0px;
  top: 0px;

  background: url(.gif, .mp4, .png, .jpg);
  border-radius: 0.80em;
  overflow: hidden;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

export default function CardGif({ imgURL }) {
  return (
    <StyledCardGif>
      {/* <img src={imgURL}></img> */}
      <img src={imgURL} alt='cards' loading="lazy"></img>
    </StyledCardGif>
  );
}
