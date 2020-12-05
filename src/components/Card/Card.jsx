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
    width: 400px;
    height: 549px;
    left: calc(50% - 400px/2);
    top: calc(50% - 549px/2 - 0.5px);

    background: #333333;
    border: 10px solid #000000;
    box-shadow: 20px 20px 4px #623CEA;
    border-radius: 20px;
`

export default function Card(props) {
    return (
        <StyledCard>
            <CardGif />
            <CardBody />
        </StyledCard>
    );
}