import { Container, Box, Alert, TextField, Typography, Button, Stack } from "@mui/material";
import { useState } from "react";

import { socialMediaLinks } from "../data/config";
import { translations } from "../data/lang";
import { SubmitContactForm } from "../controllers/apirequest";

import '../styles/Contact.scss';

import Footer from "../components/Footer";
import LanguageSwitch from "../components/LanguageSwitch";
import Navbar from "../components/Navbar";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

// CONTACT COOLDOWN STATE
let onCooldown: boolean = false;

// STYLINGS
const socialMediaIconStyling: object = {
    fontSize: '60px',
    color: 'black'
};

const contactFormStyling: object = {
    p: 2,
    mt: 5,
    mb: 6,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    bgcolor: 'var(--secondary_color)',
    borderRadius: '5px',
    border: '8.5px solid var(--secondary_color)'
};

// ICONS
const socialMediaIcons: any = {
    'Instagram': <InstagramIcon sx={socialMediaIconStyling} />,
    'Facebook': <FacebookIcon sx={socialMediaIconStyling} />,
    'Mail': <MailIcon sx={socialMediaIconStyling} />,
    'Phone': <PhoneIcon sx={socialMediaIconStyling} />
};

// CONFIRMATION ALERT
const ConfirmationAlert = (props: ConfirmationAlertProps) => {
    const { severity, message }: any = props;

    // RETURN ELEMENT
    return (
        <Container maxWidth="lg">
            <Alert severity={severity} sx={{ mb: 3 }}>{message}</Alert>
        </Container>
    )
}

// SOCIAL MEDIA PLATFORM BUBBLE
const SocialMediaPlatform = (props: SocialMediaPlatformProps) => {
    const { name, link } = props;

    // RETURN ELEMENT
    return (
        <Box
            component="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                '&:hover': {
                    bgcolor: 'rgba(255, 97, 202, 0.758)'
                },
                py: 2,
                px: 5,
                color: 'black',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: '.55s',
                borderRadius: '15px',
                border: '6px dotted var(--tertiary_color)',
                bgcolor: 'var(--tertiary_color_loweralpha)'
            }}
        >
            <Box>
                {socialMediaIcons[name]}
            </Box>
        
            <Box>
                <Typography variant="h5" align="center" fontFamily="Preahvihear">
                    {name}
                </Typography>
            </Box>
        </Box>
    )
}

// CONTACT
const Contact = (props: ContactProps) => {
    let alertClearingTimeout: any;
    let cooldownAlertClearingTimeout: any;

    // STATES AND PROPS
    const [submissionStatus, setSubmissionStatus]: any = useState({});
    const [showCooldownAlert, setCooldownAlertState] = useState(false);
    const { currentLanguage, toggleLanguages } = props;

    // ON SUBMIT CLICK
    const onSubmitButtonClick = async (event: any) => {
        clearTimeout(alertClearingTimeout);
        clearTimeout(cooldownAlertClearingTimeout);

        // RESET SUBMISSION STATE AND PREVENT DEFAULT 'SUBMIT' BEHAVIOR
        setSubmissionStatus({});
        event.preventDefault();

        // DO NOT PROCEED IF COOLDOWN IS ACTIVE, SHOW A WARNING
        if (onCooldown) {
            setCooldownAlertState(true);
            cooldownAlertClearingTimeout = setTimeout(() => {
                setCooldownAlertState(false);
            }, 5000);

            // DO NOT CONTINUE
            return;
        }

        // SET COOLDOWN
        onCooldown = true;
        setTimeout(() => {
            onCooldown = false;

            // RESET COOLDOWN-RELATED STATES JUST IN CASE
            clearTimeout(cooldownAlertClearingTimeout);
            setCooldownAlertState(false);
        }, 15000);

        // WAIT FOR SUBMISSION
        const resultData = await SubmitContactForm(event.target);
        setSubmissionStatus(resultData);

        // CLEAR ALERT AFTER A BIT
        alertClearingTimeout = setTimeout(() => {
            setSubmissionStatus({});
        }, 11000);
    }

    // SETUP SOCIAL MEDIA PLATFORMS
    const socialMediaPlatforms = socialMediaLinks.map((mediaEntry: any) => (
        <SocialMediaPlatform key={mediaEntry.name} name={mediaEntry.name} link={mediaEntry.link} />
    ));

    // RETURN ELEMENT
    return (
        <>
            <Navbar currentLanguage={currentLanguage} />
            <LanguageSwitch currentLanguage={currentLanguage} toggleLanguages={toggleLanguages} />

            <Container maxWidth="lg" sx={{ minHeight: '100vh' }}>
                {/* DESKTOP / LARGE MONITORS */}
                <Box sx={{ mt: 5, mb: 5, px: 10, flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'center' }}>
                    <Stack direction="row" spacing={3}>
                        {socialMediaPlatforms}
                    </Stack>
                </Box>

                {/* MOBILE / SMALL MONITORS */}
                <Box sx={{ mt: 5, display: { xs: "flex", md: "none" }, justifyContent: 'center' }}>
                    <Stack direction="column" spacing={3}>
                        {socialMediaPlatforms}
                    </Stack>
                </Box>

                {/* CONTACT FORM */}
                <Box component="form" onSubmit={onSubmitButtonClick} sx={contactFormStyling}>
                    {submissionStatus['success'] === true &&
                        <ConfirmationAlert severity="success" message={translations['alert_success'][currentLanguage]} />
                    }

                    {submissionStatus['success'] === false &&
                        <ConfirmationAlert severity="error" message={translations['alert_error'][currentLanguage]} />
                    }

                    {showCooldownAlert && onCooldown &&
                        <ConfirmationAlert severity="warning" message={translations['alert_warning'][currentLanguage]} />
                    }

                    {/* HEADER */}
                    <Typography variant="h4" color="white" align="center" fontFamily="Preahvihear">
                        {translations['emailus'][currentLanguage]}
                    </Typography>

                    {/* SUBTITLE */}
                    <Typography variant="subtitle1" color="white" align="center" sx={{ mt: 1, mb: 2 }} fontFamily="Preahvihear">
                        {translations['emailus_subtitle'][currentLanguage]}
                    </Typography>

                    <TextField
                        sx={{ input: { color: 'white' } }}
                        margin="normal"
                        required
                        fullWidth
                        id="fullname"
                        label={translations['fullname'][currentLanguage]}
                        name="fullname"
                        autoComplete="fullname"
                    />

                    <TextField
                        sx={{ input: { color: 'white' } }}
                        margin="normal"
                        required
                        fullWidth
                        type="email"
                        id="email"
                        label={translations['emailaddress'][currentLanguage]}
                        name="email"
                        autoComplete="email"
                    />

                    <TextField
                        sx={{ input: { color: 'white' } }}
                        margin="normal"
                        required
                        fullWidth
                        type="subject"
                        id="subject"
                        label={translations['subject'][currentLanguage]}
                        name="subject"
                        autoComplete="subject"
                    />

                    <TextField
                        sx={{ input: { color: 'white' } }}
                        margin="normal"
                        required
                        fullWidth
                        type="message"
                        id="message"
                        label={translations['message'][currentLanguage]}
                        name="message"
                        autoComplete="message"
                        multiline
                        minRows={5}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            py: 2,
                            fontSize: '15.5px',
                            fontFamily: 'Preahvihear',
                            mt: 3,
                            mb: 2,
                        }}
                    >
                        {translations['emailus_submit'][currentLanguage]}
                    </Button>
                </Box>
            </Container>

            {/* FOOTER */}
            <Footer currentLanguage={currentLanguage} />
        </>
    )
}

export default Contact;
