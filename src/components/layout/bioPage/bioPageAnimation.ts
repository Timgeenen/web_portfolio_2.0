import gsap from 'gsap';
import { SplitText } from 'gsap/all';

export default function bioPageAnimation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.bio-page-wrapper',
            start: 'top top',
            end: () => '+=2500px',
            scrub: true,
            pin: true,
        },
    });

    tl.addLabel('header');

    const split = SplitText.create('.bio-header', {
        type: 'chars',
        smartWrap: true,
    });

    tl.fromTo(
        split.chars,
        {
            opacity: 0,
        },
        {
            stagger: 0.005,
            opacity: 'unset',
        },
        'header',
    );

    tl.addLabel('header-underline', 0);
    tl.fromTo(
        '.bio-header-underline',
        {
            width: '0%',
        },
        {
            width: '100%',
            duration: split.chars.length * 0.0055,
        },
        'header-underline',
    );

    let time = 0.005 * split.chars.length;
    tl.addLabel('scramble1', time);
    tl.addLabel('scramble2', (time += 0.1));
    tl.addLabel('scramble3', (time += 0.1));
    tl.addLabel('scramble4', (time += 0.1));
    tl.addLabel('scramble5', (time += 0.1));

    tl.to(
        '#bio-text__scramble1',
        {
            scrambleText: {
                text: 'I’m from Helden, Limburg in the Netherlands and currently based in Asia',
                chars: '🤖$%+=|/\\#&(){}[]?!👾',
                speed: 0.2,
                newClass: 'bio-text__revealed',
            },
            duration: 0.1,
        },
        'scramble1',
    );
    tl.to(
        '#bio-text__scramble2',
        {
            scrambleText: {
                text: '. After running my own window cleaning business for three years, I set out to travel through Southeast Asia and along the way discovered a real passion for programming',
                chars: '🤖$%+=|/\\#&(){}[]?!👾',
                speed: 0.2,
                newClass: 'bio-text__revealed',
            },
            duration: 0.1,
        },
        'scramble2',
    );
    tl.to(
        '#bio-text__scramble3',
        {
            scrambleText: {
                text: '. I’m always excited about opportunities where I can grow, learn, and contribute—so if something feels like a good match, ',
                chars: '🤖$%+=|/\\#&(){}[]?!👾',
                speed: 0.2,
                newClass: 'bio-text__revealed',
            },
            duration: 0.1,
        },
        'scramble3',
    );
    tl.to(
        '#bio-text__scramble5',
        {
            scrambleText: {
                text: 'let’s connect!',
                chars: '🤖$%+=|/\\#&(){}[]?!👾',
                speed: 0.2,
            },
            duration: 0.025,
        },
        'scramble5',
    );
    tl.fromTo(
        '.bio-stats',
        {
            autoAlpha: 0,
        },
        {
            autoAlpha: 1,
        },
    );

    return tl;
}
