import { AppBar, styled,Box, InputBase, Badge, Avatar, Button, Menu, MenuItem, Toolbar, Slide } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
export default function NavBar(){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const StyledNavBar = styled(Toolbar)({
        display:"flex",
        justifyContent:"space-between"        
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
        justifyContent:"center",
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
                        horizontal:"right"
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

// import { Mail, Notifications, Pets } from "@mui/icons-material";
// import {
//   AppBar,
//   Avatar,
//   Badge,
//   Box,
//   InputBase,
//   Menu,
//   MenuItem,
//   styled,
//   Toolbar,
//   Typography,
// } from "@mui/material";
// import React, { useState } from "react";

// const StyledToolbar = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
// });

// const Search = styled("div")(({ theme }) => ({
//   backgroundColor: "white",
//   padding: "0 10px",
//   borderRadius: theme.shape.borderRadius,
//   width: "40%",
// }));

// const Icons = styled(Box)(({ theme }) => ({
//   display: "none",
//   alignItems: "center",
//   gap: "20px",
//   [theme.breakpoints.up("sm")]: {
//     display: "flex",
//   },
// }));

// const UserBox = styled(Box)(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   gap: "10px",
//   [theme.breakpoints.up("sm")]: {
//     display: "none",
//   },
// }));
// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <AppBar position="sticky">
//       <StyledToolbar>
//         <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
//           LAMA DEV
//         </Typography>
//         <Pets sx={{ display: { xs: "block", sm: "none" } }} />
//         <Search>
//           <InputBase placeholder="search..." />
//         </Search>
//         <Icons>
//           <Badge badgeContent={4} color="error">
//             <Mail />
//           </Badge>
//           <Badge badgeContent={2} color="error">
//             <Notifications />
//           </Badge>
//           <Avatar
//             sx={{ width: 30, height: 30 }}
//             src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//             onClick={(e) => setOpen(true)}
//           />
//         </Icons>
//         <UserBox onClick={(e) => setOpen(true)}>
//           <Avatar
//             sx={{ width: 30, height: 30 }}
//             src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//           />
//           <Typography variant="span">John</Typography>
//         </UserBox>
//       </StyledToolbar>
//       <Menu
//         id="demo-positioned-menu"
//         aria-labelledby="demo-positioned-button"
//         open={open}
//         onClose={(e) => setOpen(false)}
//         anchorOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//         transformOrigin={{
//           vertical: "top",
//           horizontal: "right",
//         }}
//       >
//         <MenuItem>Profile</MenuItem>
//         <MenuItem>My account</MenuItem>
//         <MenuItem>Logout</MenuItem>
//       </Menu>
//     </AppBar>
//   );
// };

// export default Navbar;