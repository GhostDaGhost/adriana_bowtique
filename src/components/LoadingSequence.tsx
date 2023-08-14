import { Box, CircularProgress, Container } from "@mui/material";
import Logo from '../assets/logo2.png';

// LOADING SEQUENCE
const LoadingSequence = () => {
    return (
        <Container>
            <Box mt={7} display="flex" alignItems="center" justifyContent="center">
                <img
                    style={{ width: '375px' }}
                    src={Logo}
                    alt="logo"
                    draggable="false"
                    loading="lazy"
                />
            </Box>

            <Box mt={10} display="flex" alignItems="center" justifyContent="center">
                <CircularProgress sx={{ color: 'rgb(218, 102, 121)' }} color="secondary" size={85} thickness={5} />
            </Box>
        </Container>
    )
}

export default LoadingSequence;
