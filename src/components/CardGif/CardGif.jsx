import React from 'react';
import styled from 'styled-components';


const StyledCardGif = styled.div`
    position: relative;
    width: 300px;
    height: 287px;
    left: 0px;
    top: 0px;

    background: url(.jpg);
    border-radius: 10px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
`

export default function CardGif(props) {
    return (
        <StyledCardGif>
            <img src="http://www.fillmurray.com/300/287"></img>
        </StyledCardGif>
    );
}
