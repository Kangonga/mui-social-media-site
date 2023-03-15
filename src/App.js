import './App.css';
import SideBar from './components/SideBar/SideBar'
import NavBar from './components/NavBar/NavBar'
import RightBar from './components/RightBar/RightBar'
import Feed from './components/Feed/Feed'

import { Box,Stack } from '@mui/system';
import { AddPost } from './components/AddPost/AddPost';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const [mode,setMode] = useState('light')
  const darkTheme = createTheme({
    palette:{
      mode:mode
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
        <Box gap={1} color="text.primary" bgcolor="background.default">
          <NavBar />
            <Stack 
              direction={"row"}
              justifyContent={"space-between"}
              spacing={2}
              >
                  <SideBar mode={mode} setMode={setMode}/>
                  <Feed />
                  <RightBar />
            </Stack>
            <AddPost />
        </Box>
    </ThemeProvider>

  );
}

export default App;
