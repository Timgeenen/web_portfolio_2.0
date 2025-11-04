import { generateWavePath } from '@Utils';
import gsap from 'gsap';

export default function waveBackgroundAnimation() {
    const animations: gsap.core.Tween[] = [];
    let phase = 0;
    const waves = document.querySelectorAll('.wave-background-wave');

    const tl = gsap.timeline({
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: '.wave-background',
            start: 'top bottom',
            end: 'bottom top',
            onEnter: () => {
                animations.forEach((tween) => {
                    tween.resume();
                });
            },
            onEnterBack: () => {
                animations.forEach((tween) => {
                    tween.resume();
                });
            },
            onLeave: () => {
                animations.forEach((tween) => {
                    tween.pause();
                });
            },
            onLeaveBack: () => {
                animations.forEach((tween) => {
                    tween.pause();
                });
            },
        },
    });

    waves.forEach((wave, i) => {
        gsap.set(wave, {
            opacity: 0.5,
            transform: `translateY(${85 - i * 5}%) translateX(5%) rotate(${-30 + i * 5}deg)`,
        });
        const tween = gsap.to(wave, {
            repeatRefresh: true, // get new random values on each repeat
            repeat: -1,
            duration: () => gsap.utils.random(3, 4),
            ease: 'sine.inOut',
            attr: {
                d: () => {
                    const amplitude = gsap.utils.random(2, 10);
                    const wavelength = gsap.utils.random(220, 180);
                    phase++;
                    return generateWavePath(amplitude, wavelength, 1, phase, 200);
                },
            },
        });
        animations.push(tween);
    });

    return tl;
}
