import gsap from 'gsap';
import { useEffect, useState } from 'react';

function useInitialLoad() {
    const [finishedLoading, setFinishedLoading] = useState(false);
    useEffect(() => {
        const images = document.querySelectorAll('img');
        const loader = document.querySelector('.loader-progress');
        const percent = document.querySelector('.loader-percent');
        const total = images.length;
        let loaded = 0;

        images.forEach((image) => {
            if (image.complete || image.loading === 'lazy') {
                updateLoader();
            }
            image.onload = () => {
                updateLoader();
            };
            image.onerror = (error) => {
                console.error(error);
                updateLoader();
            };
        });

        function updateLoader() {
            loaded++;
            const progress = (loaded / total) * 100;
            gsap.to(loader, {
                duration: 0.25,
                width: `${progress}%`,
            });
            percent!.textContent = `${Math.min(100, Math.round(progress))}%`;
            if (loaded === total) {
                setFinishedLoading(true);
            }
        }
    }, []);

    return finishedLoading;
}

export default useInitialLoad;
