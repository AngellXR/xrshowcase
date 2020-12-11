import React from 'react';
import styled from 'styled-components';
import CardBody from '../CardBody/CardBody.jsx';
import CardGif from '../CardGif/CardGif.jsx';


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    position: relative;
    width: 18.75em;
    height: 25.8125em;
    left: calc(50% - 300px/2);
    top: calc(50% - 413px/2 - 0.5px);

    background: #333333;
    border: 10px solid #000000;
    box-shadow: 1.25em 1.25em .25em #623CEA;
    border-radius: 1.25em;
    
`

export default function Card({ cardInfo }) {
    console.log(cardInfo);
    return (
        <StyledCard>
                <CardGif imgURL={cardInfo.imgURL}/>
            <CardBody title={cardInfo.title} description={cardInfo.description}/>
        </StyledCard>
    );
}