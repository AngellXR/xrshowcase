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
    width: 25em;
    height: 34.3125em;
    left: calc(50% - 400px/2);
    top: calc(50% - 549px/2 - 0.5px);

    background: #333333;
    border: 10px solid #000000;
    box-shadow: 1.25em 1.25em .25em #623CEA;
    border-radius: 1.25em;
`

export default function Card(props) {
    return (
        <StyledCard>
            <CardGif />
            <CardBody />
        </StyledCard>
    );
}