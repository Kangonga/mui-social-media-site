import Test from './components/test';
import './App.css';
import SideBar from './components/SideBar/SideBar'
import NavBar from './components/NavBar/NavBar'
import RightBar from './components/RightBar/RightBar'
import Feed from './components/Feed/Feed'

import { Box,Container,Stack } from '@mui/system';

function App() {
  return (
    <Box gap={1} >
      <NavBar />
        <Stack 
           direction={"row"}
           justifyContent={"space-between"}
           spacing={2}
           >
              <SideBar />
              <Feed />
              <RightBar />
        </Stack>
      {/* </Container> */}
    </Box>
  );
}

export default App;
