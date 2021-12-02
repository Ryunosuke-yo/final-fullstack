import  React, { useState, useEffect } from "react"
import {pink, generalColors} from "./theme/colors";


import { Center, Square, Circle, Image, Text, Input, Textarea, Button, Container, Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, AccordionIcon, Flex, Avatar, Badge, Grid} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import axios from 'axios';

import Emoji from "../assets/emoji-photo.jpg"

import styled from 'styled-components';
import ImgSection from "./components/img-section";
import InputSection from "./components/Input-section";
import ResultPage from "./components/result-page";
import Header from "./components/Header";



function App() {
  
  return (
    <div style={{background : pink[300],}}>
    <Header />

    <ImgSection />
    <InputSection />

  </div>
  )
}


  

export default App