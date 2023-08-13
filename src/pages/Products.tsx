import { Card, CardContent, CardMedia, Box, Grid, Typography, Link } from "@mui/material";

import { translations } from "../data/lang";
import { products } from "../data/products";
import { facebookLink } from "../data/config";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import LanguageSwitch from "../components/LanguageSwitch";

const Products = (props: ProductsProps) => {
    const { currentLanguage, toggleLanguages } = props;

    // RETURN ELEMENT
    return (
        <>
            <Navbar currentLanguage={currentLanguage} />
            <LanguageSwitch currentLanguage={currentLanguage} toggleLanguages={toggleLanguages} />

            <Box sx={{ py: 8, px: 5 }}>
                <Box sx={{ mt: -3, mb: 5, p: 5, borderRadius: '6px', border: '6px dotted var(--tertiary_color)', backgroundColor: 'var(--tertiary_color_loweralpha)'}}>
                    <Typography variant="h5" align="center" fontFamily="Preahvihear">
                        {translations['placeorder_instructions'][currentLanguage]} <Link href={facebookLink} rel="noopener noreferrer" target="_blank">Facebook</Link>!
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {products.map((product: any, index: any) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: 'var(--secondary_color)',
                                color: 'white'
                            }}>
                                <CardMedia
                                    component="div"
                                    sx={{ pt: '100%' }}
                                    image={new URL(`../assets/products/${product['image']}`, import.meta.url).href}
                                />

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {product['name']}
                                    </Typography>

                                    <Typography gutterBottom>
                                        {product['description']}
                                    </Typography>

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
