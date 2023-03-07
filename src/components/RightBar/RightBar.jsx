import { Box } from "@mui/material";

export default function RightBar(){
    return (
    <Box flex={1} bgcolor={"lightcoral"}
    display={{
        xs: "none",
        sm: "inline"
    }} 
    >
        <h1>Rightbar</h1>
    </Box>)
}