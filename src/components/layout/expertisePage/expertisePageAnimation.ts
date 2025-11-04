import gsap from 'gsap';

export default function ExpertisePageAnimation() {
    const expertises = Array.from(document.querySelectorAll('.expertise'));
    const ctaButton = document.querySelector('.cta-button-wrapper')!;
    const timelines = expertises.map((element) => createTimeline(element));

    const ctaTimeline = gsap
        .timeline({
            scrollTrigger: {
                trigger: ctaButton,
                start: () => 'top 80%',
                end: () => 'top 70%',
                scrub: 2,
                invalidateOnRefresh: true,
            },
        })
        .from(ctaButton, {
            y: 40,
            autoAlpha: 0,
        });

    timelines.push(ctaTimeline);

    return timelines;
}

function createTimeline(selector: Element) {
    const tl = gsap
        .timeline({
            scrollTrigger: {
                trigger: selector,
                start: () => 'center 80%',
                end: () => 'center 70%',
                scrub: 2,
                invalidateOnRefresh: true,
            },
        })
        .from(selector, {
            autoAlpha: 0,
            y: 20,
        });

    return tl;
}
