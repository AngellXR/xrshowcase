import React from 'react';
import styled from 'styled-components';
import CardTitle from '../CardTitle/CardTitle.js';
import CardBodyText from '../CardBodyText/CardBodyText.js';



const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    position: relative;
    width: 400px;
    height: 549px;
    left: 223px;
    top: 100px;
    background: #333333;
    border: 10px solid #000000;
    box-shadow: 20px 20px 4px #623CEA;
    border-radius: 20px;
`

export default function Card(props) {
    return (
        <StyledCard>
            <img src="http://www.fillmurray.com/370/410"></img>
            <CardTitle />
            <CardBodyText />
            <input type="submit" value="game" name="game" />
            <input type="submit" value="threejs" name="threejs" />
        </StyledCard>
    );
}