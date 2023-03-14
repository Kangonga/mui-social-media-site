import "./SideBar.scss"
import { Box } from "@mui/system"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material"
import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings } from "@mui/icons-material"

export default function SideBar(){
    return (
    <Box width="20vw"
    display={{
        xs: "none",
        sm: "block"
    }}
    position="relative"
    > 
    <Box position="fixed">
    <List>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home></Home>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Pages></Pages>
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Group></Group>
            </ListItemIcon>
            <ListItemText primary="Group" />
          </ListItemButton>
        </ListItem>
        </List>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person></Person>
            </ListItemIcon>
            <ListItemText primary="Person" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings></Settings>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountBox></AccountBox>
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight></ModeNight>
            </ListItemIcon>
            <Switch></Switch>
          </ListItemButton>
        </ListItem>
    </Box>

    </Box>
    )
}