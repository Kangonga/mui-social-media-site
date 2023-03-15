import { Box } from "@mui/system"
import { Favorite, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { images } from "../../Assets";


export default function Post(){
    const [fillFavorite, setfillFavorite] = useState(false)

    return (
    <>
        <Box>
            <Card sx={{margin:"1rem"}} >
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert></MoreVert>
                </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />

            <CardMedia
                component="img"
                height="20%"
                image={images.pic1}
                alt="Paella dish"
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite onClick={()=>setfillFavorite(!fillFavorite)} sx={{color:fillFavorite?"red":'gray'}}/>
                </IconButton>
                <IconButton aria-label="share">
                <Share />
                </IconButton>         
            </CardActions>
            </Card>
        </Box>     
    </>
    )
}