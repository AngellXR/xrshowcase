import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import '../card.css';


const StyledCardBodyText = styled.div`
    /* body */


    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    color: #FCFCFC;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 13px;
`
// const StyledCardBodyText = styled.div`
//     font-family: "Lato", sans-serif;
//     font-style: normal;
//     font-weight: normal;
//     font-size: 14px;
//     line-height: 17px;
//     color: #fcfcfc;
//     position: absolute;
//     width: 369px;
//     height: 34px;
//     left: 30px;
//     top: 257px;
// `


export default function CardBodyText(props) {
    return (
        <StyledCardBodyText>
            This is my body description of the experience. You should totally click this to experience WebXR for yourself.
        </StyledCardBodyText>
    );
}