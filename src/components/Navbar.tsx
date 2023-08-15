import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppBar, Container, Toolbar, Box, IconButton, Menu, MenuItem, Typography, Button } from "@mui/material";
import { pages } from "../data/config";
import { translations } from "../data/lang";

import Logo from '../assets/logo2.png';
import MenuIcon from "@mui/icons-material/Menu";

// NAVBAR BUTTON (WITHIN BURGER MENU) STYLING
const navigationMenuButtonStyling: object = {
    '&:first-of-type': {
        borderTop: 'none'
    },

    color: 'white',
    borderTop: '1px solid white',
    bgcolor: 'var(--secondary_color)'
};

// NAVBAR
const Navbar = (props: NavbarProps) => {
    const { currentLanguage } = props;

    // ROUTER NAVIGATE FUNCTION AND NAVIGATION MENU STATE
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);

    // NAVIGATION MENU OPEN/CLOSE FUNCTIONS
    const closeNavigationMenu = () => setAnchorElNav(null);
    const openNavigationMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    }

    // RETURN ELEMENT
    return (
        <AppBar sx={{ backgroundColor: 'var(--secondary_color)' }} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 5, cursor: 'pointer' }} onClick={() => {
                        navigate('/home');
                    }}>
                        <img
                            style={{ width: '125px' }}
                            src={Logo}
                            alt="logo"
                            draggable="false"
                            loading="lazy"
                        />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none", cursor: 'pointer' } }} onClick={() => {
                        navigate('/home');
                    }}>
                        <img
                            style={{ width: '85px' }}
                            src={Logo}
                            alt="logo"
                            draggable="false"
                            loading="lazy"
                        />
                    </Box>

                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="navigation menu"
                            aria-controls="navigation_menu"
                            aria-haspopup="true"
                            onClick={openNavigationMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="navigation_menu"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left"
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={closeNavigationMenu}
                            sx={{
                                display: { xs: "block", md: "none" }
                            }}
                        >
                            {pages.map(page => (
                                <MenuItem
                                    key={page}
                                    onClick={() => {
                                        closeNavigationMenu();
                                        navigate(`/${page.toLowerCase()}`);
                                    }}
                                    className="navigationmenu_button"
                                    sx={navigationMenuButtonStyling}
                                >
                                    <Typography fontFamily="Preahvihear" textAlign="center">
                                        {translations[`navbar_${page}`][currentLanguage]}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages.map(page => (
                            <Button
                                href={`/${page.toLowerCase()}`}
                                key={page}
                                onClick={closeNavigationMenu}
                                sx={{
                                    fontFamily: "Preahvihear",
                                    fontWeight: 700,
                                    fontSize: '22px',
                                    textTransform: 'none',
                                    mr: 2,
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    '&:hover': {
                                        color: 'var(--tertiary_color)'
                                    }
                                }}
                            >
                                {translations[`navbar_${page}`][currentLanguage]}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar;
