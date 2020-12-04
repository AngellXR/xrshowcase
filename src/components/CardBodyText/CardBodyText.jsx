import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import '../card.css';


const StyledCardBodyText = styled.div`
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #fcfcfc;
    position: absolute;
    width: 369px;
    height: 34px;
    left: 30px;
    top: 257px;
`

export default function CardBodyText(props) {
    return (
        <StyledCardBodyText>
            <p>This is my body description of the experience. You should totally click this to experience WebXR for yourself.</p>
        </StyledCardBodyText>
    );
}