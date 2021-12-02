import React from 'react';

import {Image, Text} from '@chakra-ui/react'
import styled from 'styled-components';

import Emoji from "../../assets/emoji-photo.jpg"
import {pink, generalColors} from "../theme/colors";

const ImgSection = () => {
    return (
    <RelativeWrapper>
        <Image width="100%" src={Emoji} objectFit="cover" height="26rem"/>


        <OverlayBG></OverlayBG>

        <AbsoluteWrapper>
            <Text fontSize="2rem" align="center">Let's do a little...</Text>
            <Text fontStyle="italic"  fontSize="7rem">Uranai</Text>
        </AbsoluteWrapper>
    </RelativeWrapper>
    );
}

const RelativeWrapper = styled.div`
    position: relative;
    `

    const AbsoluteWrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color : white;
    `

    const OverlayBG = styled.div`
    top : 0;
    width : 100%;
    background-color : ${pink[300]};
    opacity: 0.7;
    position: absolute;
    height : 26rem;
    `

export default ImgSection;
