import React, { useEffect, useState } from 'react';
import {Container, Image, Text, Accordion, AccordionItem, Box, AccordionButton, AccordionPanel, Grid, Flex, Avatar, Badge, AccordionIcon} from "@chakra-ui/react"


import {pink, generalColors} from "../theme/colors";
import axios from 'axios';
import Header from './Header';
import { resultHeader, userPic } from '../randomPhotos';
import randomHeadings from "../randomHeadings"


const ResultPage = ()=> {
    const [userToday, setUserToday] = useState([])
    const [luck, setLuck] = useState({})
    const [thinking, setThinking] = useState({})
    const [outfit, setOutfit] = useState({})
    const [name, setName] = useState()
    const random = (ar)=>{
        return Math.floor(Math.random() * ar.length)
    }

    
    useEffect(()=>{
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();

        const getUserAndTelling = async ()=>{

            const res = await axios.get("/get/user")
            const userData = res.data.reverse()
            const filtered = userData.filter(user=> user.date == `${year}/${month}/${date}`)
            const sliced = filtered.slice(1,7)
            setName(filtered[0].name)
            setUserToday(sliced)

            const luck = await axios.get("get/luck")
            const displayLuck = luck.data[random(luck.data)]
            setLuck(displayLuck) 

            const thinking = await axios.get("get/thinking")
            const displayThinking = thinking.data[random(thinking.data)]
            setThinking(displayThinking)

            const outfit = await axios.get("get/outfit")
            const displayOutfit = outfit.data[random(outfit.data)]
            setOutfit(displayOutfit)
        }
        getUserAndTelling()
    },[])
    
  

    const mapUser = userToday.map(user=> 
    <Flex border="1px" borderColor={generalColors.white} borderRadius="6px" p="0.7rem" key={user._id}>
    <Avatar src={userPic[random(userPic)]} alignSelf="center"/>
    <Box ml='3'>
        <Text fontWeight='bold'>
        {user.name}
        </Text>
        <Badge>{user.oneWord}</Badge>
        <Text fontSize='sm'>{user.feeling}</Text>
    </Box>
</Flex>
)


    
    return (
        <div style={{background : pink[300],}}>
    <Header />
    <Container  maxW="100%" centerContent="true" >
        <Image  src={resultHeader[random(resultHeader)]} objectFit="cover" borderRadius="full" boxSize='20rem' mt="2rem"/>
        <Text fontSize="2rem" mt="2rem">{randomHeadings[random(randomHeadings)]},</Text>
        <Text fontSize="2rem" fontStyle="italic">{name}!</Text>
    </Container>

    <Container  maxW="100%" pt="2rem" pd="8rem"  bg="mainColor.300" >
            <Accordion allowMultiple width="60%" ml="auto" mr="auto">
            <AccordionItem>
                <h2>
                    <Container centerContent="true" >
                    <Box textAlign="center" >
                        <AccordionButton _focus="none" _hover="none" mt="1rem">
                            Thinking
                        <AccordionIcon />
                        </AccordionButton>
                    </Box>
                </Container>
                </h2>
            <AccordionPanel pb={8}>
                {thinking.thinking}
            </AccordionPanel>
            </AccordionItem>

            <AccordionItem mt="1.5rem">
                <h2>
                    <Container centerContent="true">
                        <Box textAlign="center">
                        <AccordionButton _focus="none" _hover="none" mt="1rem">
                            Outfit
                        <AccordionIcon />
                        </AccordionButton>
                        </Box>
                    </Container>
                </h2>
            <AccordionPanel pb={8}>
                {outfit.outfit}
            </AccordionPanel>
            </AccordionItem>

            <AccordionItem mt="1.5rem" pb="2rem">
                <h2>
                    <Container centerContent="true">
                        <Box textAlign="center">
                        <AccordionButton _focus="none" _hover="none" mt="1rem">
                            Luck
                        <AccordionIcon />
                        </AccordionButton>
                        </Box>
                    </Container>
                </h2>
            <AccordionPanel pb={8}>
                {luck.luck}
            </AccordionPanel>
            </AccordionItem>
        </Accordion>
    </Container>

    <Text textAlign="center" fontSize="2rem" mt="3rem">- People Today-</Text>
        <Grid templateColumns='repeat(3, 1fr)' gap={3} maxW="80%" mr="auto" ml="auto" mt="3rem" pb="3rem">
        {mapUser}
        </Grid>
    </div>
    )
}

export default ResultPage