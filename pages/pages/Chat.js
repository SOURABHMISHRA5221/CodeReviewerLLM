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
        rows={20}
        style ={{width:500, backgroundColor: 'white'}}
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
        rows={20}
        style ={{width:500, backgroundColor: 'white'}}
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
    const [data3, setData] = React.useState('');
    const [data2, setData2] = React.useState('');
    const handleCallback = (childData) =>{
       setData(childData);
    }
    const handleClick = async ()=>{
      const url = 'https://360b-34-91-245-7.ngrok-free.app/api/generate'; // replace with your API endpoint
      console.log(data3)
      const data = {
  "model": "llama3",
  "prompt": data3,
  "stream":false
  
};// replace with your data

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setData2(json.response); // process your response here
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
    }
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
                  <MultilineTextFields parentCallback={handleCallback} label="Write anything here"/>
                  <Button onClick={handleClick} variant="contained" color="primary">Let's Go</Button>
                </Stack>
                <Stack spacing={2}>
                <MultilineTextFields2 value={data2} label="Response" />
                <Button href="/" variant="contained" color="primary">Go to home</Button>
                </Stack>
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
