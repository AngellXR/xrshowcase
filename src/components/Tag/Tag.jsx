import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';


const StyledTag = styled.div`
/* label */


position: static;
width: 12px;
height: 9px;
left: 10px;
top: 4px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 8px;
line-height: 9px;
text-align: center;

color: #F3F3F3;


/* Inside Auto Layout */

/* tag */


/* Auto Layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 4px 10px;

position: relative;
width: 32px;
height: 17px;

background: #BF1363;
border-radius: 10px;
`

export default function Tag(props) {
    return (
        <StyledTag>
            tag
        </StyledTag>
    );
}


