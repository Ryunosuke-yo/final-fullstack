import React from 'react';

import {Center} from "@chakra-ui/react"
import {Link} from "react-router-dom"

import {pink, generalColors} from "../theme/colors";

const Header = () => {
    return (
    <>
    <Center  h='4rem' color='white' fontSize= "lg" fontStyle="italic" letterSpacing="0.5rem" borderBottom="1px" borderColor={generalColors.white}>
    <Link to="/">
      Fortune Telling App
    </Link>
    </Center>
    </>
    );
}

export default Header;
