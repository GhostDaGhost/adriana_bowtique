import { useState } from "react";
import { Card, CardContent, CardMedia, Box, Grid, Typography, Link, Modal } from "@mui/material";

import { translations } from "../data/lang";
import { products } from "../data/products";
import { facebookLink } from "../data/config";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import LanguageSwitch from "../components/LanguageSwitch";

// FOCUSED IMAGE MODAL STYLING
const focusedImageModalStyling: object = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'none',
    border: 'none',
    outline: 0,
    p: 2
};

// PRODUCTS
const Products = (props: ProductsProps) => {
    const { currentLanguage, toggleLanguages } = props;

    // FOCUSED IMAGE MODAL STATES
    const [isFocusedImageShowing, showFocusedImage] = useState(false);
    const [focusedImage, setFocusedImage] = useState('');

    // RETURN ELEMENT
    return (
        <>
            <Navbar currentLanguage={currentLanguage} />
            <LanguageSwitch currentLanguage={currentLanguage} toggleLanguages={toggleLanguages} />

            <Modal open={isFocusedImageShowing} onClose={() => showFocusedImage(false)}>
                <Box sx={focusedImageModalStyling}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <img
                            style={{ maxWidth: '100vw', height: '90vmin' }}
                            src={focusedImage}
                            alt='focused bow image'
                            draggable='false'
                            loading='lazy'
                        />
                    </Box>
                </Box>
            </Modal>

            <Box sx={{ py: 8, px: 5 }}>
                <Box sx={{ mt: -3, mb: 5, p: 5, borderRadius: '6px', border: '6px dotted var(--tertiary_color)', bgcolor: 'var(--tertiary_color_loweralpha)'}}>
                    <Typography variant="h5" align="center" fontFamily="Preahvihear" gutterBottom>
                        {translations['placeorder_instructions'][currentLanguage]} <Link href={facebookLink} rel="noopener noreferrer" target="_blank">Facebook</Link>!
                    </Typography>

                    <Typography variant="h6" align="center" fontFamily="Preahvihear">
                        {translations['focusimagehint'][currentLanguage]}
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {products.map((product: any, index: any) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                bgcolor: 'var(--secondary_color)',
                                color: 'white'
                            }}>
                                <CardMedia
                                    component="div"
                                    sx={{
                                        pt: '60%',
                                        cursor: 'pointer'
                                    }}
                                    image={new URL(`../assets/products/${product['image']}`, import.meta.url).href}
                                    onClick={() => {
                                        setFocusedImage(new URL(`../assets/products/${product['image']}`, import.meta.url).href);
                                        showFocusedImage(true);
                                    }}
                                />

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5" gutterBottom>
                                        {product['name']}
                                    </Typography>

                                    {(product['description'] && product['description'] !== '') &&
                                        <Typography variant="body1" gutterBottom>
                                            {product['description']}
                                        </Typography>
                                    }

                                    <Typography variant="h5" color="#12e049">
                                        {product['price']}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <ScrollToTop />

            <Footer currentLanguage={currentLanguage} />
        </>
    )
}

export default Products;
