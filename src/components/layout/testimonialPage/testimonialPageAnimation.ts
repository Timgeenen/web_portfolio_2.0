import { TESTIMONIALS } from '@Data';
import gsap from 'gsap';

export default function testimonialPageAnimation() {
    const duration = TESTIMONIALS.length * 6;
    let started = false;
    const tl = gsap.timeline({
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: '.testimonial-page',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate(self) {
                if (self.direction === 1) {
                    if (!started) {
                        tween.time(duration * 100000).play(); // start at high iteration to prevent reverse loop from pausing
                        started = true;
                        return;
                    }
                    tween.play();
                } else {
                    tween.reverse();
                }
            },
            onLeave() {
                tween.pause();
            },
            onLeaveBack() {
                tween.pause();
            },
        },
    });

    const tween = gsap.to('.testimonial-list', {
        paused: true,
        ease: 'linear',
        duration,
        repeat: -1,
        direction: 1,
        xPercent: -50,
    });
    return tl;
}
