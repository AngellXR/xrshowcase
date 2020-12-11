import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card.jsx';
import '../../App.css';


const StyledCardGrid = styled.div`
    // position: absolute;
    margin-left: auto;
    margin-right: auto;
    width: 1052px;
`

export default function CardGrid(props) {
    // const card = "<div class="item"> <Card /> </div>"
    return (
        <StyledCardGrid>
            <div class="cardgrid">
                <div class="item"> <Card /> </div>
                <div class="item"> <Card /> </div>
                <div class="item"> <Card /> </div>
                <div class="item"> <Card /> </div>
                <div class="item"> <Card /> </div>
                <div class="item"> <Card /> </div>
                <div class="item"> <Card /> </div>


            </div>
        </StyledCardGrid>
    );
}