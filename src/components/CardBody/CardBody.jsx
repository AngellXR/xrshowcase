import React from 'react';
import styled from 'styled-components';
import CardTitle from '../CardTitle/CardTitle.jsx';
import CardBodyText from '../CardBodyText/CardBodyText.jsx';



const StyledCardBody = styled.div`
    /* CardBody */


    /* Auto Layout */

    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 20px;

    position: static;
    width: 396px;
    height: 166px;
    left: 2px;
    top: 383px;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
`

export default function CardBody(props) {
    return (
        <StyledCardBody>
            <CardBodyText />
            <CardTitle />
            {/* <input type="submit" value="game" name="game" />
            <input type="submit" value="threejs" name="threejs" /> */}
        </StyledCardBody>
    );
}