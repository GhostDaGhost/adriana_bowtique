import { Container } from "@mui/material";

import Footer from "../components/Footer";
import LanguageSwitch from "../components/LanguageSwitch";
import Navbar from "../components/Navbar";

const About = (props: AboutProps) => {
    const { currentLanguage, toggleLanguages } = props;

    // RETURN ELEMENT
    return (
        <>
            <Navbar currentLanguage={currentLanguage} />
            <LanguageSwitch currentLanguage={currentLanguage} toggleLanguages={toggleLanguages} />

            <Container maxWidth="lg" sx={{ minHeight: '100vh', py: 3 }}>
                <main>

                </main>
            </Container>

            <Footer currentLanguage={currentLanguage} />
        </>
    )
}

export default About;
