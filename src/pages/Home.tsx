import { Container, Box, Typography, Link } from "@mui/material";
import '../styles/Home.scss';

import { translations } from "../data/lang";
import { facebookLink } from "../data/config";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LanguageSwitch from "../components/LanguageSwitch";
import CarouselOfPictures from "../components/CarouselOfPictures";
import HomeBio from "../components/HomeBio";

const frameStyling: object = {
    bgcolor: 'var(--secondary_color)',
    borderRadius: '5px',
    border: '8.5px solid var(--secondary_color)'
};

// HOME
const Home = (props: HomeProps) => {
    const { currentLanguage, toggleLanguages } = props;

    // RETURN ELEMENT
    return (
        <>
            <Navbar currentLanguage={currentLanguage} />
            <LanguageSwitch currentLanguage={currentLanguage} toggleLanguages={toggleLanguages} />

            {/* DESKTOP / LARGE MONITORS */}
            <Box sx={{ mt: 5, mb: 5, px: 10, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Box display="flex" justifyContent="space-between" flexDirection="row">
                    <Box sx={frameStyling}>
                        <CarouselOfPictures />
                    </Box>

                    <Box sx={{ py: 2, px: 3, ml: 5, ...frameStyling }}>
                        <HomeBio />
                    </Box>
                </Box>
            </Box>

            {/* MOBILE / SMALL MONITORS */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', py: 3 }}>
                    <Box sx={frameStyling}>
                        <CarouselOfPictures />
                    </Box>

                    <Box sx={{ py: 2, px: 3, mt: 2, ...frameStyling }}>
                        <HomeBio />
                    </Box>
                </Container>
            </Box>

            {/* CUSTOM ORDERS NOTICE */}
            <Container maxWidth="lg">
                <Box sx={{ mb: 4, p: 2, borderRadius: '6px', border: '6px dotted var(--tertiary_color)', bgcolor: 'var(--tertiary_color_loweralpha)' }}>
                    <Typography fontFamily="Preahvihear" sx={{ fontSize: '25px' }} variant="h5">
                        {translations['customorders'][currentLanguage]} <Link href={facebookLink} rel="noopener noreferrer" target="_blank">Facebook</Link>!
                    </Typography>
                </Box>
            </Container>

            {/* FOOTER */}
            <Footer currentLanguage={currentLanguage} />
        </>
    )
}

export default Home;
