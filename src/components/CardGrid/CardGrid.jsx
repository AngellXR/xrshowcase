import React from "react";
import styled from "styled-components";
import Card from "../Card/Card.jsx";
import "../../App.css";
import { CARDINFO } from "../../utils/constants";

const StyledCardGrid = styled.div`
  // position: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  // max-width: 140vmin;
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
