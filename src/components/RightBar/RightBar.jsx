import { AvatarGroup,Avatar, Box, Typography,  ImageList, ImageListItem, ListItemText, List, ListItem, ListItemAvatar, Divider } from "@mui/material";
import { images } from '../../Assets'
import './RightBar.scss'
export default function RightBar(){
    return (
    <Box 
    width="30vw"
    display={{
        xs: "none",
        sm: "inline"
    }} 
    >
        <Box
         position="fixed"
         display="flex"
         flexDirection="column"
         gap="1rem"
         height="99%"
         padding="1rem 0"
         overflow="hidden"
        >
            <Box height="10vh">
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
            <Box width="100%" height="20vh" overflow="auto">
                <Typography variant="h5" >
                    Latest photos
                </Typography>

                <ImageList sx={{width:"100%",overflow:"auto", justifyContent:"flex-start", height:"15vh"  }}>
                    
                    {Object.values(images)?.map((image,index)=>{ 
                       return(
                            <ImageListItem key={index} >
                                <img src={image} alt="posts" />
                            </ImageListItem>
                       )
                       })}
                    
                </ImageList>
            </Box>

            <Box height="50vh">
                    <Typography variant="h5">
                            Recent Posts 
                    </Typography>
                    <Box height="100%" overflow="auto">
                        <List>
                            <ListItem alignItems="flex-start" sx={{width:"90%"}}>
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