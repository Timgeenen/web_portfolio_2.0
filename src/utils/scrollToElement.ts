export default function smoothScroll(element: Element, duration = 1000, offset = 0, top = false) {
    if (!element) return;

    const start = window.scrollY;
    const end = top ? -1 * window.scrollY : element.getBoundingClientRect().top + start - offset;
    const startTime = performance.now();

    function scrollStep(currentTime: number) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeInOutQuad =
            progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;

        window.scrollTo(0, start + (end - start) * easeInOutQuad);

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}
