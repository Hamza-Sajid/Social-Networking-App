import { createTheme, Stack, ThemeProvider } from '@mui/material';
import React from 'react'
import Add from '../../Components/Add';
import Chat from '../../Components/Chat';
import Feed from '../../Components/Feed';
import NavBar from '../../Components/NavBar';
import Options from '../../Components/Options';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#3BA9BE',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#3BA9BE',
    },
  },
});


function Home() {
  
    return (
    <div>
      
        <ThemeProvider theme={theme}>
        <NavBar/>
        <Stack direction="row" spacing={2} alignItems="stretch">
        <Options/>
        <Feed/>
        <Chat/>
        <Add/>
        
</Stack>
</ThemeProvider>
    </div>
  )
}

export default Home