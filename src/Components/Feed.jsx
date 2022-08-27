import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Checkbox } from '@material-ui/core';
import Favorite from '@mui/icons-material/Favorite';

function Feed() {
  return (
  <Box
        flex={3}    p={2}       >
      
      <Card >
      <CardHeader
        avatar={
          <Avatar 
          src="https://p.favim.com/orig/2019/02/12/profile-pictures-pfp-girl-profile-picture-Favim.com-6894559.jpg"
        aria-label="profile picture">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp"
        subheader="September 14, 2012"
      />
      <CardMedia
        component="img"
        height="auto"
        sx={{objectFit:'fill'}}
        image="https://i.pinimg.com/originals/e8/9f/bb/e89fbb7f78967b4b0544c1d5beb4fc3e.jpg"
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
          <Checkbox icon={<FavoriteIcon/>} checkedIcon={<Favorite/>}>
            
          </Checkbox>
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
     
    </Card>





    {/* 2nd card */}



    <Card sx={{marginTop:'2em'}}>
      <CardHeader
        avatar={
          <Avatar 
          
          src="https://i.pinimg.com/originals/40/32/e0/4032e0031e2e95989f1e76fe3d4f57b7.jpg"
        aria-label="profile picture">
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Chorizo Paella"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="auto"
        sx={{objectFit:'fill'}}
        image="https://cdn.quotesgram.com/img/6/12/2028439793-life_not_easy-t2.jpg"
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
          <Checkbox icon={<FavoriteIcon/>} checkedIcon={<Favorite/>}>
            
          </Checkbox>
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
       
      </CardActions>
     
    </Card>



  </Box>
  )
}

export default Feed