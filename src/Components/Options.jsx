import { Box } from '@mui/material'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { BrowseGallery, MailOutlined, MusicNoteOutlined, Settings, Shop2Rounded } from '@mui/icons-material';
import Add from './Add';

function Options() {
  return (
  <Box
        
        flex={1}
        p={2}
        sx={{ 
            display:{xs: 'none' , sm: 'block'}
        }}
        
  >
      

<Box sx={{position:'fixed'}}>





      
      
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
         

<ListItem disablePadding>
    <ListItemButton>
        <ListItemIcon>
            <BrowseGallery/>
        </ListItemIcon>
        <ListItemText primary="Gallary"></ListItemText>
    </ListItemButton>
</ListItem>


<ListItem disablePadding>
    <ListItemButton>
        <ListItemIcon>
            <Settings/>
        </ListItemIcon>
        <ListItemText primary="Settings"></ListItemText>
    </ListItemButton>
</ListItem>


<ListItem disablePadding>
    <ListItemButton>
        <ListItemIcon>
            <MusicNoteOutlined/>
        </ListItemIcon>
        <ListItemText primary="Music"></ListItemText>
    </ListItemButton>
</ListItem>



<ListItem disablePadding>
    <ListItemButton>
        <ListItemIcon>
            <Shop2Rounded/>
        </ListItemIcon>
        <ListItemText primary="Shop"></ListItemText>
    </ListItemButton>
</ListItem>


        </List>
    

        
        </Box>









  </Box>
  )
}

export default Options;