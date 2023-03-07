import { ExpandMore, Favorite, MoreVert, Share, ShareLocationOutlined } from "@mui/icons-material";
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, styled, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import Post from "./Post";

export default function Feed(){
    return (
        <Box padding={1} flex={2} bgcolor={"black"} display="flex" flexDirection="column" alignItems="center" gap={2}>
            <h1>Feed</h1>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    )
}