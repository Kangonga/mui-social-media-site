import { Add, DateRange, SentimentDissatisfied, SentimentSatisfied, SentimentVeryDissatisfied, SentimentVerySatisfied } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Fab,Modal, TextField, Typography} from '@mui/material'
import { Stack } from '@mui/system'
import { useState } from 'react'

export const AddPost = () => {
  const [openModal, setopenModal] = useState(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height:400,
    borderRadius:'30px',
    bgcolor: 'background.paper',
    p: 4,
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    gap:"1rem"
  };

  return (
    <Box 
    position="fixed"
    bottom="1rem"
    left={{xs:"calc(50% - 25px)",md:"5%"}}>
    
        <Fab sx={{
            color:"blue"
        }}>
            <Add onClick={()=>setopenModal(true)} />
        </Fab>
        
        <Modal
          open={openModal}
          onClose={()=>setopenModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}
          color="text.primary" bgcolor="background.default"
          >
            <Typography id="modal-modal-title" variant="h5" component="h2" sx={{color:"gray",textAlign:"center",fontWeight:"bold"}}>
              Create Post
            </Typography>

            <Box sx={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:"1rem"}}>
                  <Avatar>J</Avatar>
                  <Typography fontSize="1rem" variant='h6'>John Doe</Typography>
            </Box>

            <TextField
                id="outlined-multiline-static"
                label="My Post"
                multiline
                rows={4}
                placeholder="Create post..."
                sx={{mt:"1rem"}}
            />
            <Stack direction="row" spacing="1" paddingLeft="1rem">
              <SentimentVerySatisfied color='primary'/>
              <SentimentSatisfied color='primary'/>
              <SentimentDissatisfied color='primary'/>
              <SentimentVeryDissatisfied color='primary'/>
            </Stack>

            <ButtonGroup variant="contained" sx={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"}}>
                <Button sx={{flex:"4"}}>Post</Button>
                <DateRange sx={{flex:"1"}}></DateRange>
            </ButtonGroup>
          </Box>
        </Modal>

    </Box>
  )
}
