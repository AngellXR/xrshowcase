import React from 'react';
import styled from 'styled-components';
import CardBody from '../CardBody/CardBody.jsx';


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    position: absolute;
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
            {/* Commented out bc they are now combined in cardbody
            <CardTitle />
            <CardBodyText /> */}
            <CardBody />
            <input type="submit" value="game" name="game" />
            <input type="submit" value="threejs" name="threejs" />
        </StyledCard>
    );
}