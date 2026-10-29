import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // requestAnimationFrame to ensure the scroll happens after the DOM updates
        requestAnimationFrame(() => {
            window.scrollTo({
                top: 0,
                behavior: 'auto',
            });
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;