import { generateWavePath, getGradientAnimation } from '@Utils';
import gsap from 'gsap';

export default function heroCircleAnimation() {
    const animations: gsap.core.Tween[] = [getGradientAnimation({ gradientId: 'circle-gradient' })];
    const tl = gsap.timeline({
        scrollTrigger: {
            invalidateOnRefresh: true,
            trigger: '#frontpage',
            start: 'top bottom',
            end: 'bottom top',
            onEnter: () => animations.forEach((tween) => tween.resume()),
            onEnterBack: () => animations.forEach((tween) => tween.resume()),
            onLeave: () => animations.forEach((tween) => tween.pause()),
            onLeaveBack: () => animations.forEach((tween) => tween.pause()),
        },
    });
    document.querySelectorAll('.wave-mask-path').forEach((wave, i) => {
        const index = i + 1;
        let phase = 0;
        const tween = gsap.to(wave, {
            repeatRefresh: true,
            repeat: -1,
            duration: () => gsap.utils.random(1.5, 3),
            ease: 'sine.inOut',
            attr: {
                d: () => {
                    const amplitude = gsap.utils.random(4 * index, 12 * index);
                    const wavelength = gsap.utils.random(300, 800);
                    const offsetY = gsap.utils.random(220, 300);
                    phase++;
                    return generateWavePath(amplitude, wavelength, offsetY, phase, 400);
                },
            },
        });
        animations.push(tween);
    });

    return tl;
}
