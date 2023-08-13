import { useState } from 'react';

import { Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const scrollToTopButtonStyle: object = {
    display: 'inline',
    height: '65px',
    width: '65px',
    right: '2.75%',
    bottom: '25px',
    position: 'fixed',
    boxShadow: 'inset 0 0 3px black',
    border: '2px solid var(--tertiary_color)',
    bgcolor: 'var(--tertiary_color)',
    '&:hover': {
        bgcolor: 'var(--primary_color)'
    }
};

// SCROLL TO TOP COMPONENT
const ScrollToTop = () => {
    const [isScrollToTopVisible, setScrollToTopVisible] = useState(false);

    // WHEN TRIGGERED, RETURN TO THE TOP OF THE PAGE
    const ReturnToTopOfPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ADD EVENT LISTENER FOR SCROLLING
    window.addEventListener('scroll', () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setScrollToTopVisible(true);
        } else if (scrolled <= 300) {
            setScrollToTopVisible(false);
        }
    });

    // RETURN ELEMENT
    return (
        <Fab
            color="primary"
            onClick={ReturnToTopOfPage}
            sx={{ ...scrollToTopButtonStyle, opacity: isScrollToTopVisible ? '1' : '0' }}
        >
            <ArrowUpwardIcon sx={{ fontSize: 45 }} />
        </Fab>
    );
}

// EXPORT COMPONENT
export default ScrollToTop;
