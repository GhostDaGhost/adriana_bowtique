import { Container, Box, Stack, Typography, Divider } from "@mui/material"
import { authorizedPaymentMethods, mainPhoneNumber, payPalEmail, venmoUsername } from "../data/config";
import { translations } from "../data/lang";

// PAYMENT METHOD
const PaymentMethod = (props: PaymentMethodProps) => {
    const { name, imageName } = props;

    // RETURN ELEMENT
    return (
        <Box>
            <img
                width="165"
                src={new URL(`../assets/${imageName}`, import.meta.url).href}
                alt={name.toLowerCase()}
                draggable="false"
                loading="lazy"
            />
        </Box>
    )
}

// AUTHORIZED PAYMENT METHODS
const AuthorizedPaymentMethods = (props: AuthorizedPaymentMethodsProps) => {
    const { currentLanguage } = props;

    // CREATE PAYMENT METHODS
    const paymentMethods = authorizedPaymentMethods.map((paymentMethod: any, index: number) => (
        <PaymentMethod key={index} name={paymentMethod.name} imageName={paymentMethod.imageName} />
    ));

    // RETURN ELEMENT
    return (
        <Container maxWidth="xl" sx={{ mb: 5, pt: 2, pb: 1, borderRadius: '6px', border: '6px dotted var(--tertiary_color)', bgcolor: 'var(--tertiary_color_loweralpha)' }}>
            <Typography variant="h5" align="center" fontFamily="Preahvihear" gutterBottom>
                {translations['paymentmethod_notice'][currentLanguage]}
            </Typography>

            <Typography variant="h6" align="center" fontFamily="Preahvihear">
                <b>{translations['paypal_notice'][currentLanguage]}</b>
            </Typography>

            {/* FIRST DIVIDER */}
            <Divider sx={{ mt: 2, mb: 3 }} />

            {/* CONTACTS IN PAYMENT METHODS */}
            <Box display="flex" alignItems="center" flexDirection="column" sx={{ mt: 1, mb: 3 }}>
                <Typography variant="subtitle1" fontFamily="Preahvihear" gutterBottom>
                    Venmo: <b>{venmoUsername}</b>
                </Typography>

                <Typography variant="subtitle1" fontFamily="Preahvihear" gutterBottom>
                    Zelle: <b>{mainPhoneNumber}</b>
                </Typography>

                <Typography variant="subtitle1" fontFamily="Preahvihear" gutterBottom>
                    Apple Pay: <b>{mainPhoneNumber}</b>
                </Typography>

                <Typography variant="subtitle1" fontFamily="Preahvihear">
                    PayPal: <b>{payPalEmail}</b>
                </Typography>
            </Box>

            {/* FINAL DIVIDER */}
            <Divider sx={{ mt: 2, mb: 3 }} />

            {/* DESKTOP / LARGE MONITORS */}
            <Box sx={{ mb: 1, flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'center' }}>
                <Stack direction="row" spacing={5}>
                    {paymentMethods}
                </Stack>
            </Box>

            {/* MOBILE / SMALL MONITORS */}
            <Box sx={{ mb: 2, display: { xs: "flex", md: "none" }, justifyContent: 'center' }}>
                <Stack direction="column" spacing={3}>
                    {paymentMethods}
                </Stack>
            </Box>
        </Container>
    )
}

export default AuthorizedPaymentMethods;
