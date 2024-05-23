import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';
import backgroundImage from "./codechat.jpeg"
function MultilineTextFields() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={30}
        style ={{width:700, backgroundColor: 'white'}}
        defaultValue="Default Value"
        variant="outlined"
        value={value}
        onChange={handleChange}
        inputProps={{
          maxLength: 4000,
        }}
       
      />
    </form>
  );
}



function Form() {
   
    return (
        
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="97vh"

         >
            <Stack  spacing={2}>
                <MultilineTextFields />
                <Button href="/" variant="contained" color="primary">Let's Go</Button>
            </Stack>
        </Box>
        
        
    );
}




export default function MyForm() {
     const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  };
    return (<div style={appStyle}>
        <Form/>
      </div>);
}