import React from 'react';
import styled from 'styled-components';
import CardTitle from '../CardTitle/CardTitle.jsx';
import CardBodyText from '../CardBodyText/CardBodyText.jsx';
// import Tag from '../Tag/Tag.jsx';


const StyledCardBody = styled.div`
    /* CardBody */


    /* Auto Layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;

    position: static;
    width: 299px;
    height: 125px;
    left: -2px;
    top: 287px;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
`

export default function CardBody({title, description}) {
    return (
        <StyledCardBody>
            <CardBodyText description={description}/>
            <CardTitle title={title}/>
            {/* <input type="submit" value="game" name="game" />
            <input type="submit" value="threejs" name="threejs" /> */}
            {/* <Tag /> */}
        </StyledCardBody>
    );
}