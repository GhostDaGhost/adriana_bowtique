import { Box, Button, Container, Typography } from "@mui/material";
import { translations } from "../data/lang";

import Navbar from "../components/Navbar";

const Error = (props: ErrorProps) => {
    const { currentLanguage } = props;

    // RETURN ELEMENT
    return (
        <>
            <Navbar currentLanguage={currentLanguage} />

            <Container maxWidth="md">
                <Box mt={5} p={2} sx={{ borderRadius: '6px', border: '6px dotted var(--tertiary_color)', backgroundColor: 'var(--tertiary_color_loweralpha)' }}>
                    <Typography align="center" component="div" variant="h2" sx={{ mb: 4 }} fontFamily="Preahvihear">Error 404</Typography>

                    <Typography align="center" component="div" variant="h5" fontFamily="Preahvihear">
                        {translations['error_subtitle'][currentLanguage]}
                    </Typography>

                    <Box className="centered" mt={4} mb={1}>
                        <Button href="/home" variant="outlined" sx={{ fontSize: '18.5px', fontFamily: "Preahvihear" }}>
                            {translations['error_gohomebuttontext'][currentLanguage]}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Error;
