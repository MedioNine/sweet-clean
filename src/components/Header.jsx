import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { ReactComponent as LogoSvg } from "../assets/logo.svg";
import Network from "./Network";

import { keyframes } from "@mui/system";
import { MOBILE_NUMBER } from "../constants/contacts";

const ring = keyframes`
  0% { transform: rotate(0); }
  10% { transform: rotate(15deg); }
  20% { transform: rotate(-15deg); }
  30% { transform: rotate(10deg); }
  40% { transform: rotate(-10deg); }
  50% { transform: rotate(5deg); }
  60% { transform: rotate(-5deg); }
  70% { transform: rotate(0); }
  100% { transform: rotate(0); }
`;
const drawerWidth = 240;
const navItems = [
  { label: "Про нас", target: "advantages" },
  { label: "Послуги", target: "services" },
  { label: "Контакти", target: "footer" },
];

export default function Header(props) {
  const { winProp } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function scrollTo(id) {
    const targetElement = document.getElementById(id);
    const navbar = document.getElementById("navbar");
    if (targetElement) {
      console.log(window);
      const top =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbar.clientHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Sweet Clean
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => scrollTo(item.target)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Network />
    </Box>
  );

  const container =
    winProp !== undefined ? () => winProp().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" id="navbar">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <LogoSvg style={{ width: "3rem", height: "3rem" }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: "inline", textAlign: "left" }}
            >
              Sweet Clean
            </Typography>
          </Stack>
          <Box>
            <Box sx={{ display: { xs: "none", md: "inline-block" }, mr: 1 }}>
              {navItems.map((item) => (
                <Button key={item.label} onClick={() => scrollTo(item.target)}>
                  {item.label}
                </Button>
              ))}
            </Box>
            <a href={`tel:${MOBILE_NUMBER}`}>
              <Button
                startIcon={<LocalPhoneIcon />}
                sx={{
                  background: "#bbc195",
                  display: { xs: "none", md: "inline-flex" },
                }}
              >
                Зателефонувати
              </Button>
              <IconButton
                sx={{
                  display: {
                    xs: "inline-flex",
                    md: "none",
                    background: "#bbc195",
                  },
                }}
              >
                <LocalPhoneIcon
                  sx={{
                    animation: `${ring} 1.2s infinite ease-in-out`,
                    transformOrigin: "bottom center",
                    "&:hover": {
                      background: "#a9b182",
                    },
                  }}
                />
              </IconButton>
            </a>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
