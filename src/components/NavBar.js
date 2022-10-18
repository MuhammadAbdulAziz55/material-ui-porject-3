import SpaIcon from "@mui/icons-material/Spa";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";

import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Abdul Aziz
        </Typography>
        <SpaIcon sx={{ display: { xs: "block", sm: "none" } }}></SpaIcon>
        <Search>
          <InputBase placeholder="Search..."></InputBase>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ height: 30, width: 30 }}
            alt=""
            src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/299123140_3329781477344357_7420682527954690493_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHJL5Qs1X2p1ZE5vb6pGx_hJ4ZLrZxQKWQnhkutnFApZMfHlU1yejcnFIuQk-B71xruQXCs3j4iYy4cmqdfRUtI&_nc_ohc=gw7TR4zcIA8AX-2T5ib&tn=Hyu_-xKa5araHNi-&_nc_ht=scontent.fdac22-1.fna&oh=00_AT8QCynXNLuZroBnFIaRkRJUrwL14c-9A4jmrzTgle_mGA&oe=635013F3"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ height: 30, width: 30 }}
            alt=""
            src="https://scontent.fdac22-1.fna.fbcdn.net/v/t39.30808-6/299123140_3329781477344357_7420682527954690493_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHJL5Qs1X2p1ZE5vb6pGx_hJ4ZLrZxQKWQnhkutnFApZMfHlU1yejcnFIuQk-B71xruQXCs3j4iYy4cmqdfRUtI&_nc_ohc=gw7TR4zcIA8AX-2T5ib&tn=Hyu_-xKa5araHNi-&_nc_ht=scontent.fdac22-1.fna&oh=00_AT8QCynXNLuZroBnFIaRkRJUrwL14c-9A4jmrzTgle_mGA&oe=635013F3"
          />
          <Typography variant="span">M.A Aziz</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default NavBar;
