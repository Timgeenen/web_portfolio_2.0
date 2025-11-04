import gsap from 'gsap';

export default function hobbyPageAnimation() {
    const timelines = Array.from(gsap.utils.toArray('.hobbyCard')).map((card) => {
        const typedCard = card as Element;
        return createTimeline(typedCard);
    });

    timelines.push(createTimeline(document.querySelector('.hobby-header')!));

    return timelines;
}

function createTimeline(element: Element) {
    return gsap
        .timeline({
            scrollTrigger: {
                trigger: element,
                invalidateOnRefresh: true,
                start: () => 'center 90%',
                end: () => 'center 70%',
                scrub: 2,
            },
        })
        .from(element, {
            opacity: 0,
            duration: 0.5,
        });
}
