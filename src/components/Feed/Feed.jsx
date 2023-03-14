import { Box } from "@mui/material";
import Post from "./Post";
export default function Feed(){
    return (
        <Box padding={1} width="55vw" display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    )
}