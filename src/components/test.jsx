import { Home } from "@mui/icons-material";
import { Button, styled, Typography } from "@mui/material";

export default function Test(){
    const Bluebtn = styled(Button)({
        "&:hover":{
            color: "red",
            backgroudnColor:"gray"
        },
        variant:"contained",
    })
    return (
        <>
            <h1>Yow check me out</h1>
            <p>CHeck out roboto</p>
            <Button>Default</Button>
            <Button variant="outlined">OUtlined</Button>
            <Button variant="text">Text</Button>
            <Button
             variant="contained"
             color="secondary"
             startIcon={<Home />}
             >Contained</Button>
            <Button variant="disabled">Disabled</Button>

            <Bluebtn>Custom button</Bluebtn>


            <Typography variant="h1">
                    default h1
            </Typography>
        </>
    )
}