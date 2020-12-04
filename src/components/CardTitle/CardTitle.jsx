import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import '../card.css';


const StyledCardTitle = styled.div`
    font-family: "Lora", serif;
    font-style: normal;
    font-size: 48px;
    font-weight: 700;
    color: #fcfcfc;
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    line-height: 61px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 13px;
`

export default function CardTitle(props) {
    return (
        <StyledCardTitle>
            <p>Spaghetti Soup</p>
        </StyledCardTitle>
    );
}