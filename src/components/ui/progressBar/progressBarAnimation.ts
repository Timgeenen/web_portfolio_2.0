import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function progressBarAnimation() {
    gsap.to(window, {
        scrollTrigger: {
            start: 'top top',
            end: () => ScrollTrigger.maxScroll(window),
            scrub: true,
            onUpdate: (self) => {
                gsap.set('.progressBar-progress', {
                    width: `${self.progress * 100}%`,
                });
            },
        },
    });
}
