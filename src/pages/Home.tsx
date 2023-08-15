import { Carousel } from 'react-responsive-carousel';
import { Container, Box, Typography } from "@mui/material";
import '../styles/Home.scss';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LanguageSwitch from "../components/LanguageSwitch";

import FeaturedPicture1 from '../assets/featured.jpg';
import FeaturedPicture2 from '../assets/featured2.jpg';
import FeaturedPicture3 from '../assets/featured3.jpg';
import FeaturedPicture4 from '../assets/featured4.jpg';

// HOME
const Home = (props: HomeProps) => {
    const { currentLanguage, toggleLanguages } = props;

    // RETURN ELEMENT
    return (
        <>
            <Navbar currentLanguage={currentLanguage} />
            <LanguageSwitch currentLanguage={currentLanguage} toggleLanguages={toggleLanguages} />

            <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', py: 3 }}>
                <Box sx={{ bgcolor: 'var(--secondary_color)', borderRadius: '5px', border: '8.5px solid var(--secondary_color)' }}>
                    <Carousel dynamicHeight autoPlay useKeyboardArrows>
                        <div>
                            <img src={FeaturedPicture1} alt="featured picture #1" draggable="false" loading="lazy" />
                        </div>

                        <div>
                            <img src={FeaturedPicture2} alt="featured picture #2" draggable="false" loading="lazy" />
                        </div>

                        <div>
                            <img src={FeaturedPicture3} alt="featured picture #3" draggable="false" loading="lazy" />
                        </div>

                        <div>
                            <img src={FeaturedPicture4} alt="featured picture #4" draggable="false" loading="lazy" />
                        </div>
                    </Carousel>
                </Box>

                <Box sx={{ py: 2, px: 3, mt: 2, bgcolor: 'var(--secondary_color)', borderRadius: '5px', border: '8.5px solid var(--secondary_color)' }}>
                    <Typography component="p" variant="body1" color="white" fontFamily="Preahvihear">
                        Welcome to Adriana's Bowtique, where elegance meets playfulness in the world of bows! Step into a whimsical wonderland of exquisite bows and accessories, curated with love and creativity by the talented hands of Adriana herself.
                        At Adriana's Bowtique, we believe that bows are more than just accessories – they're expressions of individuality and style. Our collection showcases an array of meticulously crafted bows, ranging from classic and sophisticated designs to charmingly quirky creations. Whether you're seeking the perfect hair adornment for a special occasion or a fun and vibrant bow to add a pop of personality to your everyday look, we have something to suit every taste and mood.
                        <br />
                        <br />
                        Every bow that leaves Adriana's Bowtique is a testament to our commitment to quality. Each piece is crafted using the finest materials, ensuring durability and a luxurious feel. From satin ribbons that glide through your fingers to delicate lace that adds an air of romance, our attention to detail is evident in every stitch and fold.
                        But it's not just about the bows – it's about the experience. As you step into our charming bowtique, you'll be greeted by an atmosphere of warmth and creativity. Our knowledgeable staff is here to assist you in finding the perfect bow for any occasion or to help you create a customized masterpiece that truly reflects your unique style. Whether you're a fashion-forward trendsetter or a parent looking for an adorable accessory for your little one, Adriana's Bowtique is your destination for all things bows.
                    </Typography>
                </Box>
            </Container>

            <Footer currentLanguage={currentLanguage} />
        </>
    )
}

export default Home;
