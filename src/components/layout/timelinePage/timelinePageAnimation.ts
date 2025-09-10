import gsap from 'gsap';

export default function timelinePageAnimation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.timeline-page-wrapper',
            pin: true,
            anticipatePin: 0.5,
            pinSpacing: true,
            start: 'top top',
            end: () => '+=4000',
            scrub: true,
        },
        ease: 'power1.inOut',
    });

    (tl.addLabel('spawn_path'),
        tl.fromTo(
            '.timeline-path',
            {
                drawSVG: '100% 100%',
                autoAlpha: 0,
            },
            {
                drawSVG: '0% 100%',
                autoAlpha: 1,
            },
            'spawn_path',
        ));

    tl.to(
        '#gradient1 stop:nth-child(2)',
        {
            attr: {
                offset: '20%',
            },
        },
        'spawn_path+=30%',
    );

    gsap.utils.toArray('.timeline-feature').forEach((item, i) => {
        const typedItem = item as Element;
        gsap.set(typedItem, {
            autoAlpha: 0,
        });
        tl.to(
            typedItem,
            {
                yPercent: -55,
                autoAlpha: 1,
                delay: i === 0 ? 0.25 : 0,
            },
            i !== 0 ? '-=50%' : '-=0%',
        );

        tl.to(
            typedItem,
            {
                yPercent: -70,
                autoAlpha: 0,
                delay: 0.25,
            },
            i !== 0 ? '-=50%' : '-=0%',
        );
    });

    tl.to('.timeline-path', {
        drawSVG: '0% 0%',
        autoAlpha: 1,
    });

    tl.to(
        '#gradient1 stop:nth-child(3)',
        {
            attr: {
                offset: '0%',
            },
        },
        '-=50%',
    );

    tl.to(
        '#gradient1 stop:nth-child(4)',
        {
            attr: {
                offset: '100%',
            },
        },
        '-=100%',
    );

    return tl;
}
