import { AppBar, styled,Box, InputBase, Badge, Avatar, Menu, MenuItem, Toolbar } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

export default function NavBar(){
    const [open, setOpen] = useState(null);
    const handleClick = (event) => {
        setOpen(!open)
    };
    const handleClose = () => {
      setOpen(false);
    };
    const StyledNavBar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between",
        height:"15vh"    
    })
    const Search = styled(Box)({
        backgroundColor:"white",
        color:"black",
        flex:"2",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:".5rem",
        padding:"0.2rem .75rem",
        borderRadius:"30px",
      
    })
    const Icons = styled(Box)(({theme})=>({
        padding:".75rem",
        display:"flex",
        flex:"1",
        gap:"1rem",
        alignItems:"center",
        justifyContent:"space-around",
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
        <AppBar position="sticky">
            <StyledNavBar>
                <Box display={"flex"}
                    fontSize={"2rem"}flex={1} justifyContent={"space-between"}
                    alignItems={"center"} gap="1rem">
                    <HomeIcon sx={{transform:"scale(1.7)", display:{sm:"none"}}}></HomeIcon>
                    <HomeText>GuchuDev</HomeText>
                </Box>
                <Search>
                    <SearchIcon />
                    <InputBase placeholder="search the app..." sx={{width:"90%"}}color="text.primary"/>
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
            </StyledNavBar>
            <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical:"top",
                        horizontal:"-200px"
                    }}
                    sx={{
                      margin:"0"
                    }}
                    >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
    </AppBar>

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