import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function MyButton() {
    const l = ['first button','second button','third button','fourth button','fifth button']
    const buttonlist = l.map(item=><Button variant="contained">{item}</Button>)
    return (
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
         >
            <Stack  spacing={0.5}>
                {buttonlist}
            </Stack>
        </Box>
        
    );
}



