import { Tooltip , styled} from '@material-ui/core'
import { EditAttributesOutlined, Style} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Avatar, Button, ButtonGroup, Fab, Modal, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height:400,
    background:'white',
    borderRadius:'20px',
    boxShadow: 24,
    boxShadow:' gray 0px 10px 15px -3px, black 0px 4px 6px -2px' ,
    p: 4,
  };

  const UserBox = styled(Box)({
      display:'flex',
      alignItems:'center',
      
  })
function Add() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  return (
    <div>
      <Box sx={{display:{xs:'none', sm:'block'}, position:'fixed' , bottom:'0' , left:'0', top:'' , right:'' }}>
      <Fab onClick={handleOpen} 
       sx={{position: 'absolute' , left: '10vh', bottom:'20px'}}  color="primary"  aria-label="add">
        
        <AddIcon  />
      </Fab>
      </Box>

       <Box sx={{
           position:{xs: 'fixed', bottom:'10%', left:'8%',  borderRadius:'50%!important',  sm: 'fixed', bottom:'1%', left:'40%', }     
    
    }}>
        {/* <Tooltip > */}
        <Box sx={{display:{xs:'flex' , sm:'none'} ,background:{xs:'#1976d2'},  width:{xs:'100%'}, position:{xs:'fixed'} , bottom:{xs:'0'} ,left:{xs:'0'} , paddingTop: {xs:'0.5em'}, paddingBottom:{xs:'0.5em'}}}>
        <Fab onClick={handleOpen} 
         sx={{position:{xs: 'relative' , left: '40%'}}}  color="default"  aria-label="add">
        
        <AddIcon  />
      </Fab>
        {/* </Tooltip> */}
        </Box>


        </Box>  




{/* Tooltip code is taring here */}
{/* ------------------------------------- */}




<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" color="gray" textAlign="center" variant="h5" component="h2">
      Create post
    </Typography>
    
    <UserBox>
    <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/originals/40/32/e0/4032e0031e2e95989f1e76fe3d4f57b7.jpg"
          />
          <Typography variant='span' fontWeight={500} sx={{marginLeft:'1em'}}>
              Humza
          </Typography>
    </UserBox>
    

    <TextField
    sx={{marginTop:'2em', width:'100%'}}
  hiddenLabel
  id="standard-multiline-static"
  row={5}
  placeholder="What's on your mind, share it with world now"
  size='medium'
  autoFocus="true"
  multiline
  variant="standard"
/>



<ButtonGroup 
sx={{marginTop:'14em', width:'80%', marginLeft:'10%'}}
  disableElevation
  variant="contained"
  aria-label="Disabled elevation buttons"
>
  <Button
  sx={{width:'100%'}}
  >Post</Button>
  <Button>
      <EditAttributesOutlined/>
  </Button>
</ButtonGroup>


    
  </Box>
</Modal>









    </div>
  )
}

export default Add