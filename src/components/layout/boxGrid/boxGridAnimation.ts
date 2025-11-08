import gsap from 'gsap';

export default function boxGridAnimation() {
    const tl = gsap
        .timeline({
            scrollTrigger: {
                trigger: '.bio-page-wrapper',
                start: 'top 20%',
                end: '+=2250px',
                scrub: 2,
            },

            defaults: {
                stagger: {
                    each: 0.1,
                    from: 'center',
                    grid: 'auto',
                    ease: 'power1.inOut',
                },
            },
        })
        .from('.boxGrid-box', {
            scale: 0.1,
            transformOrigin: '50% 50%',
            ease: 'power1.inOut',
        })

        .to('.boxGrid-box', {
            rotate: 180,
            transformOrigin: '50% 50%',
        })

        .to('.boxGrid-box', {
            scale: 0.1,
            transformOrigin: '50% 50%',
            yPercent: 100,
            ease: 'power1.inOut',
        });

    return tl;
}
