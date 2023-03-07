import { AppBar, styled,Box, InputBase, Badge, Avatar, Button, Menu, MenuItem, Toolbar, Slide } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Mail, Notifications } from "@mui/icons-material";
import { Children, useState } from "react";
export default function NavBar(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const StyledNavBar = styled(AppBar)({
        margin:"0 0 .2rem 0",
        display:"flex",
    })
    const Search = styled(Box)({
        backgroundColor:"white",
        color:"black",
        flex:"2",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        gap:".5rem",
        padding:"0.2rem .75rem",
        borderRadius:"30px",

    })
    const Icons = styled(Box)(({theme})=>({
        flex:"1",
        padding:".75rem",
        display:"flex",
        gap:"1rem",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:"30px",
        [theme.breakpoints.down("sm")]:{
            justifyContent:"flex-end",
        },
    }))
    const HomeText = styled('span')(({ theme })=>({
        [theme.breakpoints.down("sm")]:{
            display:"none",
        },
        fontSize:"2rem"
    }))
    return (
        <>
        <StyledNavBar position="relative" margin="2rem">
            <Toolbar sx={{ flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center",
                    gap:"1rem",
                    padding:"2rem 1rem"
                    }}>
                <Box display={"flex"}
                    fontSize={"2rem"}flex={1} justifyContent={"space-between"}
                    alignItems={"center"} gap="1rem">
                    <HomeIcon sx={{transform:"scale(1.7)", display:{sm:"none"}}}></HomeIcon>
                    <HomeText>GuchuDev</HomeText>
                </Box>
                <Search>
                    <SearchIcon/>
                    <InputBase placeholder="search the app..." sx={{width:"90%"}}/>
                </Search>
                <Icons >
                    <Box display={{xs:"none",sm:"flex"}} color="white">
                        <Badge badgeContent={2} color="warning">
                            <Mail></Mail>
                        </Badge>
                    </Box>
                    <Box display={{xs:"none",sm:"flex"}}>
                        <Badge badgeContent={2} color={"warning"}>
                            <Notifications></Notifications>
                        </Badge>
                    </Box>
                    {/* <PositionedMenu > */}
                        <Avatar alt="my Image" sx = {{transform:{sm:"scale(0.8)"}}} onClick={handleClick}/>
                    {/* </PositionedMenu> */}
                </Icons>
            </Toolbar>
            <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    // anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 100,
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        horizontal: 180,
                    }}
                    >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
    </StyledNavBar>
            </>
    )

}
function PositionedMenu({children}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        {children}
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: -50,
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }