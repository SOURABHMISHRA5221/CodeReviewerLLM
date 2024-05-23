import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RoleCard from './RoleCard.js'
import cr from './code.jpeg'
import ed from './error.jpeg'
import cb from './chat.jpeg'



export default function MyCards() {
   
    const values = [
      {
        "name":"Code Reviewer",
        "desciption": "I can help you optimize your code",
        "location":cr,
        "link":"/code"
      },
      {
        "name":"Error Detector",
        "desciption": "I can help you detect error from stacktrace",
        "location":ed,
        "link":"/errors"
      },
      {
        "name":"NSL CHATBOT",
        "desciption": "I AM LOCAL CHATBOT",
        "location":cb,
        "link":"/chat"
      }
    ]
    const Cardslist = values.map(item=><RoleCard location={item.location} name={item.name} desciption={item.desciption} link={item.link} />)
    return (
        
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"

         >
            <Stack  direction="row" spacing={2}>
                {Cardslist}
            </Stack>
        </Box>
        
        
    );
}



