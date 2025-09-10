import { HOBBY_DATA } from '@Data';
import { useEffect, useState } from 'react';

function useGifObserver() {
    const [isVisibleTuple, setIsVisibleTuple] = useState<boolean[]>(
        Array(HOBBY_DATA.length).fill(false),
    );

    useEffect(() => {
        const observer = new IntersectionObserver((entries, _observer) => {
            setIsVisibleTuple((prev) => {
                const updated = [...prev];
                entries.forEach((entry) => {
                    const index = Number(entry.target.getAttribute('data-index'));
                    const video = entry.target as HTMLVideoElement;
                    if (entry.isIntersecting && !isVisibleTuple[index]) {
                        video.play();
                    }
                    if (!entry.isIntersecting && isVisibleTuple[index]) {
                        video.pause();
                    }
                });
                return updated;
            });
        });

        document.querySelectorAll('.hobbyCard-gif').forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);
}

export default useGifObserver;
