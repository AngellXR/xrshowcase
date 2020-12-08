import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';


const StyledCardBodyText = styled.div`
    /* body */


    position: relative;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;

    color: #FCFCFC;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 13px;
`

export default function CardBodyText(props) {
    return (
        <StyledCardBodyText>
            This is my body description of the experience. You should totally click this to experience WebXR for yourself.
        </StyledCardBodyText>
    );
}