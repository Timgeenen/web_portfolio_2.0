import gsap from 'gsap';

export default function loadingPageAnimation(): gsap.core.Timeline {
    const tl = gsap.timeline();
    tl.to('.loadingPage', {
        yPercent: -100,
        duration: 1,
        delay: 0.5,
        ease: 'power1.inOut',
    });
    tl.to('.loadingPage', {
        display: 'none',
    });

    return tl;
}
