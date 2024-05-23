import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@material-ui/core/TextField';
import backgroundImage from "../codechat.jpeg"
import Typography from '@mui/material/Typography';

let response = ""

function MultilineTextFields(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.parentCallback(value);

  };

  


  return (
    <form noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-static"
        label={props.label}
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

function MultilineTextFields2(props) {
  
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-static"
        label={props.label}
        multiline
        rows={30}
        style ={{width:700, backgroundColor: 'white'}}
        defaultValue="Default Value"
        variant="outlined"
        value={props.value}
        inputProps={{
          maxLength: 4000,
        }}
       
      />
    </form>
  );
}



function Form() {
    const [data, setData] = React.useState('');
    const [data2, setData2] = React.useState('');
    const handleCallback = (childData) =>{
       setData(childData);
    }
    const handleClick = ()=>{
      setData2(data)
    }
    return (
        
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="97vh"

         >
            <Stack  direction="row" spacing={0.5}>
                <Stack  spacing={2}>
                  <MultilineTextFields parentCallback={handleCallback} label="Paste java code here"/>
                  <Button onClick={handleClick} variant="contained" color="primary">Let's Go</Button>
                </Stack>
                <MultilineTextFields2 value={data2} label="Response" />
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