import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

function Chat() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      profile:
        "https://i.pinimg.com/originals/40/32/e0/4032e0031e2e95989f1e76fe3d4f57b7.jpg",
      title: "Breakfast",
      author: "@bkristastucchio",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      profile:
        "https://p.favim.com/orig/2019/02/12/profile-pictures-pfp-girl-profile-picture-Favim.com-6894559.jpg",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gFtzwSj9f0Zf_Fgy4AOrsdt0MNuyuqyf3PJaLiftSLuFA07oAxIHfpoK33IEUKodB6Q&usqp=CAU",
      title: "Camera",
      author: "@helloimnik",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      profile:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gFtzwSj9f0Zf_Fgy4AOrsdt0MNuyuqyf3PJaLiftSLuFA07oAxIHfpoK33IEUKodB6Q&usqp=CAU",
      title: "Coffee",
      author: "@nolanissac",
      cols: 2,
    },
  ];

  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box sx={{ position: "" }}>
        <Typography variant="button">Friends Online 🟢</Typography>

        <AvatarGroup total={14}>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/originals/40/32/e0/4032e0031e2e95989f1e76fe3d4f57b7.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://p.favim.com/orig/2019/02/12/profile-pictures-pfp-girl-profile-picture-Favim.com-6894559.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gFtzwSj9f0Zf_Fgy4AOrsdt0MNuyuqyf3PJaLiftSLuFA07oAxIHfpoK33IEUKodB6Q&usqp=CAU"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://1tb.favim.com/preview/6/672/6727/67275/6727552.jpg"
          />
        </AvatarGroup>

        <Typography variant="button">Latest Posts</Typography>
        <Box sx={{ margin: "1em" }}>
          <ImageList variant="masonry">
            {itemData.map((val, index) => {
              return (
                <>
                  <ImageListItem key={index}>
                    <img src={`${val.img}`}></img>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "0.5em",
                      }}
                    >
                      <Avatar
                        sx={{ width: "1em", height: "1em" }}
                        alt="Trevor Henderson"
                        src={`${val.profile}`}
                      />
                      <Typography variant="caption">
                        {val.author.substring(0, 10)}
                      </Typography>
                    </Box>
                  </ImageListItem>
                </>
              );
            })}
          </ImageList>
        </Box>


        <Typography variant="h6">
                       Conversations
                      </Typography>

                      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://p.favim.com/orig/2019/02/12/profile-pictures-pfp-girl-profile-picture-Favim.com-6894559.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://1tb.favim.com/preview/6/672/6727/67275/6727552.jpg"/>
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>



      </Box>
    </Box>
  );
}

export default Chat;
