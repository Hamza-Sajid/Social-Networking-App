import  React , {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import styled from "@emotion/styled";
import {  Pets } from "@mui/icons-material";
import MailIcon from '@mui/icons-material/Mail';
import { Badge } from "@mui/material";

const NavBar = () => {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });


const [menu,setMenu]=useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography
          variant="h4"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
            Spa-Chat
        </Typography>
        
        <Pets
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />

        <input type="text" placeholder="Search..."
        style={{borderRadius:'5px' , border:'none ', width:'30%' , height:'2em' , padding:'0.5em'}}
        ></input>


<Box sx={{display:"flex" , alignItems:'center'}}>
<Badge color="secondary"  variant="dot" sx={{
    display:{xs:'none', sm:'block'}
}}>
        <MailIcon  sx={{fontSize:'2em'}}/>
      </Badge>
      
      <Avatar
      onClick={(e)=> setMenu(menu?false: true)}
  alt="Remy Sharp"
  src="https://image.shutterstock.com/image-photo/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-250nw-1854697390.jpg"
  sx={{ width: 44, height: 44  , marginLeft:'2em'}}
/>
<Typography sx={{marginLeft:'1em',
display:{xs: 'block' , sm:'none'}
}}
variant="button"
>Humza</Typography>
</Box>





<Menu
       open={menu}
        onClose={()=> setMenu(false)}
       anchorOrigin={{
           vertical:'top',
           horizontal:'right'
       }}
       >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>

      </StyledToolBar>





      






    </AppBar>
  );
};
export default NavBar;
