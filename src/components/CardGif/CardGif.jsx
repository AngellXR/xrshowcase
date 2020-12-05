import React from 'react';
import styled from 'styled-components';


const StyledCardGif = styled.div`
    position: static;
    width: 400px;
    height: 383px;
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
            <img src="http://www.fillmurray.com/400/383"></img>
        </StyledCardGif>
    );
}
