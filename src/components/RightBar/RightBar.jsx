import { AvatarGroup,Avatar, Box, IconButton, Typography, Badge, ImageList, ImageListItem, ListItemText, List, ListItem, ListItemAvatar, Divider } from "@mui/material";
import { images } from '../../Assets'
import './RightBar.scss'
export default function RightBar(){
    return (
    <Box flex={1} 
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
            <Box>
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
            <Box width="100%">
                <Typography variant="h5" >
                    Latest photos
                </Typography>

                <ImageList sx={{display:"flex",flexWrap:"wrap", justifyContent:"flex-start"}}
                    
                >
                    {Object.values(images)?.map((image,index)=>{
                       return(
                       <ImageListItem key={index} sx={{width:"20%"}}>
                            <img src={image} alt="posts" />
                        </ImageListItem>
                       )
                    })}
                </ImageList>
            </Box>

            <Box>
                    <Typography variant="h5">
                            Recent Posts
                    </Typography>
                    <Box className="scrollContainer">
                        <List sx={{bgcolor: 'background.paper', height:"90%"}}>
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