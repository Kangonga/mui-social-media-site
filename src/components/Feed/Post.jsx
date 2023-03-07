import { Box } from "@mui/system"
import { ExpandMore, Favorite, MoreVert, Share, ShareLocationOutlined } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, styled, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { images } from "../../Assets";


export default function Post(){
    const [fillFavorite, setfillFavorite] = useState(false)

    const ExpandMoreSection = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }));

      const [expanded, setExpanded] = useState(false);
      const handleExpandClick = () => {
          setExpanded(!expanded);
      };
    return (<>
        <Box>

            <Card >
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
                height="194"
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
                {/* <ExpandMoreSection
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMore />
                </ExpandMoreSection> */}
            </CardActions>
            </Card>

        </Box>
            
    </>
    )
}



{/* <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
        </Typography>
    
        <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </Typography>
    
        <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
        </Typography>
    
        <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
    
    </CardContent>

</Collapse> */}