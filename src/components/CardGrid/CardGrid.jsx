import React from "react";
import styled from "styled-components";
import Card from "../Card/Card.jsx";
import "../../App.css";
import { CARDINFO } from "../../utils/constants";

const StyledCardGrid = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  //   width: 1080px;

  /* Smartphones (landscape and portrait) ----------- */
  @media (min-device-width: 320px) and (max-device-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export default function CardGrid(props) {
  // const card = "<div class="item"> <Card /> </div>"
  return (
    <StyledCardGrid>
      <div class="cardgrid">
        {CARDINFO.map((card) => {
          return (
            <a href={card.link}>
              <div className="item">
                {" "}
                <Card cardInfo={card} />{" "}
              </div>
            </a>
          );
        })}
      </div>
    </StyledCardGrid>
  );
}
