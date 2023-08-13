import { Container } from "@mui/material";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LanguageSwitch from "../components/LanguageSwitch";

const Home = (props: HomeProps) => {
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

export default Home;
