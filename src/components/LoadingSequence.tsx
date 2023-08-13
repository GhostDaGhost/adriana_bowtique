import { Box, CircularProgress, Container } from "@mui/material";
import Logo from '../assets/logo2.png';

const barHeight = {
    height: '53px'
};

// LOADING SEQUENCE
const LoadingSequence = () => {
    return (
        <>
            <Box component="header" className="bar" sx={barHeight} />

            <Container>
                <Box mt={12} display="flex" alignItems="center" justifyContent="center">
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

            <Box component="footer" className="footer bar" sx={barHeight} />
        </>
    )
}

export default LoadingSequence;
