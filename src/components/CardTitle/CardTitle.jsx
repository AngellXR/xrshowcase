import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import '../card.css';


const StyledCardTitle = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    font-family: "Lora", serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 61px;

    color: #FCFCFC;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 13px;
`

export default function CardTitle(props) {
    return (
        <StyledCardTitle>
            Spaghetti Soup
        </StyledCardTitle>
    );
}