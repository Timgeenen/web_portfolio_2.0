import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export default function frontpageAnimation(): gsap.core.Timeline {
    const tl = gsap.timeline();
    const scrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '#frontpage',
            pin: true,
            scrub: true,
            start: 'top top',
            end: '+=1000',
        },
    });

    tl.from('.heroCircle-circle-svg', {
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power1.inOut',
    });

    tl.add(headerTween());
    tl.add(desktopNameTween(scrollTimeline), '-=105%');
    tl.add(textAnimation(), '-=10%');
    pageTween(scrollTimeline);

    tl.add(scrollTimeline);
    return tl;
}

function headerTween(): gsap.core.Tween[] {
    const split = SplitText.create('.frontpage-header', {
        type: 'chars',
        smartWrap: true,
    });

    const headerTween = gsap.fromTo(
        split.chars,
        {
            opacity: 0,
        },
        {
            stagger: gsap.utils.random(0.035, 0.05),
            opacity: 'unset',
            backgroundClip: 'text',
        },
    );

    const headerUnderlineTween = gsap.to('.frontpage-header-underline', {
        width: '100%',
        duration: headerTween.duration(),
        ease: 'power3.out',
    });

    return [headerTween, headerUnderlineTween];
}

function desktopNameTween(tl: gsap.core.Timeline): gsap.core.Tween[] {
    const split = SplitText.create('.frontpage-name-desktop', {
        type: 'chars',
        mask: 'chars',
        smartWrap: true,
    });

    const centerIndex = Math.floor(split.chars.length / 2);

    const desktopNameIn = gsap.from(split.chars, {
        y: -200,
        stagger: (index) => {
            const stagger = Math.abs(Math.abs(index - centerIndex) - centerIndex) * 0.05;
            return stagger;
        },
        ease: 'power2.out',
    });

    const desktopMask = gsap.from(split.masks, {
        autoAlpha: 0,
        delay: 0.1,
        stagger: (index) => {
            const stagger = Math.abs(Math.abs(index - centerIndex) - centerIndex) * 0.05;
            return stagger;
        },
        ease: 'power2.out',
    });

    const desktopNameRotate = gsap.to('.frontpage-name-desktop', {
        rotation: -5,
        stagger: (index) => {
            const stagger = Math.abs(Math.abs(index - centerIndex) - centerIndex) * 0.05;
            return stagger;
        },
        ease: 'power2.out',
    });

    tl.to(split.chars, {
        yPercent: -15,
        autoAlpha: 0,
        stagger: (index) => Math.pow(Math.abs(index - centerIndex) * 0.075, 2),
    });

    return [desktopNameIn, desktopMask, desktopNameRotate];
}

function textAnimation() {
    const split = SplitText.create('.frontpage-bio', { type: 'words' });
    return gsap.from(split.words, {
        y: -20,
        filter: 'blur(20px)',
        stagger: 0.025,
        duration: 0.25,
        ease: 'power1.inOut',
        autoAlpha: 0,
    });
}

function pageTween(tl: gsap.core.Timeline): void {
    tl.to(
        '#frontpage',
        {
            autoAlpha: 0,
        },
        '<',
    );
}
