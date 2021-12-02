import React, { useState } from 'react';

import {Input, Textarea, Button, Center, FormControl, Text} from "@chakra-ui/react"
import styled from 'styled-components';
// import { useFormik } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from "react-router-dom"


import {pink, generalColors} from "../theme/colors";
import axios from 'axios';

const InputSection = () => {
    const [erMessage, setErMessage] = useState(false)
    let navigate = useNavigate();
    let today = new Date();
    
    
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    const handleEr = (message)=>{
        if(erMessage){
            return <Text textAlign="center" fontSize="0.8rem">{message}</Text>
        }    

       
    }
    
    const formik = useFormik({
        initialValues : {
            name : "",
            oneWord : "",
            feeling : "",
            date : year + '/' + month + '/' + date,
            
        },
        onSubmit : values=>{
            const {name, oneWord, feeling} = values
            if(name == "" && oneWord =="" && feeling ==""){
                setErMessage(prev=>!prev)
            } else {
                
                axios.post("/postUser", values)
                console.log(values)
                navigate("../result", { replace: true });

            }
        }
    })
    

    return (
    <InputContainer>
            <div style={{width : "50%", margin : "0 auto 0 auto"}}>

                
                    <form  onSubmit={formik.handleSubmit}>

                    <Input variant='flushed' placeholder='Your Name?' outline="none" mt="1rem" focusBorderColor="mainColor.300" _placeholder={{color : generalColors.white, textAlign : "center"}} name="name" onChange={formik.handleChange}
                    value={formik.values.name}/>
                    {handleEr("Whatever You want yourself!")}
                    <Input variant='flushed' placeholder='Your age?' outline="none" mt="1rem" focusBorderColor="mainColor.300" _placeholder={{color : generalColors.white, textAlign : "center"}} />
                    <Input variant='flushed' placeholder='Your gender?' outline="none" mt="1rem" focusBorderColor="mainColor.300" _placeholder={{color : generalColors.white, textAlign : "center"}} />
                    <Input variant='flushed' placeholder='One word for Your feeling today?' outline="none" mt="1rem" focusBorderColor="mainColor.300" _placeholder={{color : generalColors.white, textAlign : "center"}} name="oneWord" onChange={formik.handleChange}
                    value={formik.values.oneWord}/>
                    {handleEr("Just one word..")}
                    <Textarea resize="none" placeholder="How are you doing?" outline="none" mt="2rem" focusBorderColor="mainColor.300" _placeholder={{color : generalColors.white, textAlign : "center"}} name="feeling" onChange={formik.handleChange}
                    value={formik.values.feeling}/>
                     {handleEr("a")}
                    <Center>
                    
                        <Button variant='outline' color="mainColor.100" outline="none" mt="2.5rem" mb="3rem" _focus="none" type="submit">
                        See Your day
                        </Button>
                    
                    </Center>
                    
                    </form>
            </div>
    </InputContainer>
    );
}

const InputContainer = styled.div`
  width : 100%;
  // background-color : ${pink[400]};
  height : 100%;
  `

export default InputSection;
