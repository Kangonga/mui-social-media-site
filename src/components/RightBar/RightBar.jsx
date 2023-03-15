import { AvatarGroup,Avatar, Box, Typography,  ImageList, ImageListItem, ListItemText, List, ListItem, ListItemAvatar, Divider } from "@mui/material";
import { images } from '../../Assets'
import './RightBar.scss'
export default function RightBar(){
    return (
    <Box 
    maxWidth="35vw"
    flex={2}
    display={{
        xs: "none",
        md:"flex"
    }}
    padding="0 .5rem"
    >
        <Box
         position="fixed"
         display="flex"
         flexDirection="column"
         gap="1rem"
         height="99%"
        //  width="inherit"
         maxWidth="35vw"
         padding="1rem 0"
         overflow="hidden"
        >
            <Box height="12vh">
                <Typography variant="h5">
                    Online Friends
                </Typography>
                <AvatarGroup max={4} sx={{marginBottom:".1rem",justifyContent:"flex-end"}} >
                    <Avatar ></Avatar>                
                    <Avatar ></Avatar>
                    <Avatar ></Avatar>
                    <Avatar ></Avatar>
                    <Avatar ></Avatar>
                    <Avatar ></Avatar>
                    <Avatar ></Avatar>
                    <Avatar ></Avatar>
                    <Avatar ></Avatar>
                </AvatarGroup>
            </Box>
            <Box width="100%" height="20vh">
                <Typography variant="h5" >
                    Latest photos
                </Typography>
                <Box
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        flexWrap:"nowrap",
                        justifyContent:"flex-start",
                        overflow:"auto",
                        height:"17vh",
                        width:"75%",
                        gap:".5rem",
                        padding:"0 .5rem"
                    }}>
                        {Object.values(images)?.map((image,index)=>{ 
                        return(
                            <Box >
                                <img src={image} alt="posts" style={{height:"14vh"}}/>
                            </Box>
                        )
                        })}

                </Box>

            </Box>

            <Box height="40vh" width="100%" marginTop="2vh">
                    <Typography variant="h5">
                            Recent Posts 
                    </Typography>
                    <Box height="100%" overflow="auto" width="77%">
                        <List sx={{width:"100%"}}>
                            <ListItem alignItems="flex-start" sx={{width:"100%",flexShrink:"0"}}>
                                <ListItemAvatar>
                                    <Avatar>A</Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                                        <Typography display="inline"> -- I will be in your neighbourhood this weekend starting...</Typography>
                                    </>
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar>A</Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                        >
                                            Ali Connors
                                        </Typography>
                                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                                        <Typography display="inline"> -- I will be in your neighbourhood this weekend starting...</Typography>
                                    </>
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar>A</Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                    {/* {" — I'll be in your neighborhood doing errands this…"} */}
                                        <Typography display="inline"> -- I will be in your neighbourhood this weekend starting...</Typography>
                                    </>
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </List>  
                    </Box>

            </Box>

        </Box>
    </Box>)
}