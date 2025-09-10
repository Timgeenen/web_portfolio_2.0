import gsap from 'gsap';

export default function scrollToLabel(label: string, tl: gsap.core.Timeline, duration = 1) {
    const labelTime = tl.labels[label];
    const totalDuration = tl.duration();
    if (labelTime == undefined) {
        return;
    }
    const labelProgress = labelTime / totalDuration;
    const st = tl.scrollTrigger;
    if (!st) {
        return;
    }

    const scrollStart = st.start;
    const scrollEnd = st.end;

    const targetScroll = scrollStart + (scrollEnd - scrollStart) * labelProgress;

    window.scrollY = targetScroll;
    gsap.to(window, {
        scrollTo: targetScroll,
        ease: 'power2.out',
        duration,
    });
}
