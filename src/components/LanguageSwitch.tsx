import { Box, Button, Container, Typography } from "@mui/material";
import { translations } from "../data/lang";

// LANGUAGE SWITCH
const LanguageSwitch = (props: LanguageSwitchProps) => {
    const { currentLanguage, toggleLanguages } = props;

    // RETURN ELEMENT
    return (
        <Container maxWidth="md">
            <Box mt={3} p={2} sx={{ borderRadius: '6px', border: '6px dotted var(--tertiary_color)', backgroundColor: 'var(--tertiary_color_loweralpha)' }}>
                <Typography fontFamily="Preahvihear" mb={2} sx={{ fontSize: '25px' }} variant="h5">
                    {translations['languageswitch_title'][currentLanguage]}
                </Typography>

                <Button variant="outlined" sx={{ fontSize: '15.5px', fontFamily: "Preahvihear", mb: 1 }} onClick={toggleLanguages}>
                    {translations['languageswitch_buttontext'][currentLanguage]}
                </Button>
            </Box>
        </Container>
    )
}

export default LanguageSwitch;
