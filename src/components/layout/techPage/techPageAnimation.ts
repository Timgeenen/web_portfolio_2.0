import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export default function techPageAnimation() {
    const technologies = document.querySelectorAll('.tech-item');
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.tech-page-wrapper',
            start: 'top 7.5px',
            end: () => `+=${technologies.length * 125}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
            anticipatePin: 0.5,
        },
    });

    const textTl = gsap.timeline({
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: '.tech-page-wrapper',
            start: 'top bottom',
            scrub: 2.5,
            end: () => `+=${technologies.length * 500}`,
        },
    });

    const split = SplitText.create('.tech-header', {
        type: 'words',
    });

    textTl.addLabel('in');
    split.words.forEach((word, i) => {
        gsap.set(word, {
            yPercent: '-100',
            xPercent: i === 0 ? 150 : -175,
            opacity: 0,
        });
        textTl.to(
            word,
            {
                opacity: 0.5,
                duration: 2.95,
                xPercent: i === 0 ? -300 : 75,
            },
            i === 0 ? 'in' : '<',
        );
    });

    tl.addLabel('in');
    tl.from(
        '.tech-item',
        {
            x: () => gsap.utils.random(200, -200),
            y: () => gsap.utils.random(100, -100),
            autoAlpha: 0,
            stagger: 0.1,
        },
        'in',
    );

    tl.addLabel('out', '+=.5');
    tl.to(
        '.tech-item',
        {
            x: () => gsap.utils.random(200, -200),
            y: () => gsap.utils.random(100, -100),
            autoAlpha: 0,
            stagger: 0.05,
        },
        'out',
    );

    return [textTl, tl];
}
