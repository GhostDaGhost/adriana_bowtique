import { Box, Container, Link, Typography } from "@mui/material";
import { facebookLink, socialMediaLinks } from "../data/config";
import { translations } from "../data/lang";

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

// SOCIAL MEDIA ICON STYLING
const mediaIconStyle: object = {
    fontSize: '37px',
    mr: 2,
    cursor: 'pointer',
    color: 'white',
    transition: '.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.2)',
        color: 'var(--primary_color)'
    }
};

// ASSOCIATED ICONS WITH SOCIAL MEDIA LINKS
const socialMediaIcons: any = {
    'Instagram': <InstagramIcon sx={mediaIconStyle} />,
    'Facebook': <FacebookIcon sx={mediaIconStyle} />,
    'Mail': <MailIcon sx={mediaIconStyle} />,
    'Phone': <PhoneIcon sx={mediaIconStyle} />
};

// FOOTER
const Footer = (props: FooterProps) => {
    const { currentLanguage } = props;

    // RETURN ELEMENT
    return (
        <Box component="footer" sx={{ py: 4, bgcolor: 'var(--secondary_color)' }}>
            <Container maxWidth="lg">
                <Box mb={1}>
                    {socialMediaLinks.map((mediaEntry: any) => (
                        <Link key={mediaEntry.name} href={mediaEntry.link} rel="noopener noreferrer" target="_blank">
                            {socialMediaIcons[mediaEntry.name]}
                        </Link>
                    ))}
                </Box>

                <Typography component="p" variant="h6" color="white">
                    {translations['placeorder_instructions'][currentLanguage]}
                    {<Link
                        sx={{
                            '&:hover': {
                                color: 'var(--tertiary_color)'
                            },

                            color: 'var(--primary_color)',
                            transition: '.2s',
                            textDecorationColor: 'var(--primary_color)'
                        }}
                        href={facebookLink}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Facebook
                    </Link>}.
                </Typography>

                <Typography component="p" variant="body1" color="white" mt={1}>
                    {`© Adriana\'s Bowtique ${new Date().getFullYear()}`}
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer;
