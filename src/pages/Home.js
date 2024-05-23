import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RoleCard from '../RoleCard.js'
import cr from '../code.jpeg'
import ed from '../error.jpeg'
import { Link } from "react-router-dom";
import MyCards from "../Cards.js"
import backgroundImage from "../back.png"

export default function Home() {
     const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  };
    return (<div style={appStyle}>
        <MyCards/>
      </div>);
}



