import React from "react";
import styled from "styled-components";
import CardTitle from "../CardTitle/CardTitle.jsx";
import CardBodyText from "../CardBodyText/CardBodyText.jsx";
// import Tag from '../Tag/Tag.jsx';

const StyledCardBody = styled.div`
  /* CardBody */

  /* Auto Layout */

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.75em;

  position: relative;
  width: 299px;
  height: 125px;
  margin: 0;
`;

export default function CardBody({ title, description }) {
  return (
    <StyledCardBody>
      <CardBodyText description={description} />
      <CardTitle title={title} />
      {/* <input type="submit" value="game" name="game" />
            <input type="submit" value="threejs" name="threejs" /> */}
      {/* <Tag /> */}
    </StyledCardBody>
  );
}
