import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function progressBarAnimation() {
    const setWidth = gsap.quickSetter('.progressBar-progress', 'width', '%');
    gsap.to(window, {
        scrollTrigger: {
            invalidateOnRefresh: true,
            start: 'top top',
            end: () => ScrollTrigger.maxScroll(window),
            scrub: true,
            onUpdate: (self) => setWidth(self.progress * 100),
        },
    });
}
