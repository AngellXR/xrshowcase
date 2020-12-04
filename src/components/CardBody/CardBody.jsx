import React from 'react';
import styled from 'styled-components';
import CardTitle from '../CardTitle/CardTitle.jsx';
import CardBodyText from '../CardBodyText/CardBodyText.jsx';



const StyledCardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    position: relative;
    width: 396px;
    height: 166px;
    left: 0px;
    top: 0px;
`

export default function CardBody(props) {
    return (
        <StyledCardBody>
            <CardTitle />
            <CardBodyText />
            {/* <input type="submit" value="game" name="game" />
            <input type="submit" value="threejs" name="threejs" /> */}
        </StyledCardBody>
    );
}