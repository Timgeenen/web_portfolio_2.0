import { useEffect, useState } from 'react';

function useResize() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        window.addEventListener('resize', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setWidth(window.innerWidth);
            }, 200);
        });
    }, []);
    return width;
}

export default useResize;
