import { getGradientAnimation } from '@Utils';
import gsap from 'gsap';

export default function contactPageAnimation() {
    const gradientTween = getGradientAnimation({ gradientId: 'contact-ellipse-gradient' });
    const footerTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: 2,
        },
    });

    footerTimeline.fromTo(
        '.footer-name',
        {
            xPercent: -50,
            yPercent: 100,
        },
        {
            yPercent: 5,
        },
    );

    const contactPageTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact-page',
            start: () => 'top 60%',
            end: () => 'top center',
            onEnter: () => gradientTween.resume(),
            onLeaveBack: () => gradientTween.pause(),
            scrub: 2,
        },
    });

    contactPageTimeline.from(
        '.contact-header',
        {
            autoAlpha: 0,
        },
        0,
    );

    contactPageTimeline.from(
        '#contact-ellipse',
        {
            autoAlpha: 0,
            rotation: 180,
        },
        0,
    );

    return [contactPageTimeline, footerTimeline];
}
