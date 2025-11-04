import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function useCursor() {
    const hoverTime = 200; // hover animation time
    const maxRotation = 135; // max cursor rotation in deg

    const cursorRef = useRef<SVGSVGElement>(null);
    const isHoveringRef = useRef(false);
    const rotationRef = useRef(0); // current state of rotation
    const hoverTimeRef = useRef(0); // current state of animation time
    const cursorPositionRef = useRef({ x: 0, y: 0 }); // real-time cursor position;
    const hoverTargets = ['a', 'button', '.dropdown-option', '.hobbyCard', '.tech-item'];

    function isPhone() {
        const isSmallScreen = window.matchMedia('(max-width: 767px)').matches;
        const isTouch = window.matchMedia('(pointer: coarse)').matches;
        return isSmallScreen && isTouch;
    }

    function getCursorWidth(varName: string, element: Element) {
        return Number(getComputedStyle(element).getPropertyValue(varName).trim().split('px')[0]);
    }

    useEffect(() => {
        if (!cursorRef.current) return;
        if (isPhone()) {
            cursorRef.current.style.display = 'none';
            return;
        }

        const clickTween = getClickTween();
        const controller = new AbortController();
        const { signal } = controller;

        const setX = gsap.quickSetter(cursorRef.current, 'x', 'px');
        const setY = gsap.quickSetter(cursorRef.current, 'y', 'px');
        const setRotation = gsap.quickSetter(cursorRef.current, 'rotation', 'deg');

        handleDrawCursor();
        document.addEventListener('click', handleClick, { signal });
        document.addEventListener('mousemove', handleMouseMove, { signal });

        function handleDrawCursor() {
            let prev: number | null = null;
            let currentX = 0;
            let currentY = 0;

            function draw(now: number) {
                if (!cursorRef.current) {
                    requestAnimationFrame(draw);
                    return;
                }

                const offset = getCursorWidth('--cursor-size', cursorRef.current) / 2;
                const timeDiff = prev ? now - prev : 16; // fallback ~16ms
                prev = now;

                // Normalize delta against 60fps (16.67ms per frame)
                const delta = timeDiff / (1000 / 60);

                if (isHoveringRef.current && hoverTimeRef.current < hoverTime) {
                    hoverTimeRef.current = Math.min(hoverTimeRef.current + timeDiff, hoverTime);
                }
                if (!isHoveringRef.current && hoverTimeRef.current > 0) {
                    hoverTimeRef.current = Math.max(hoverTimeRef.current - timeDiff, 0);
                }

                const targetRotation = (maxRotation / hoverTime) * hoverTimeRef.current;

                // Multiply easing factors by delta
                rotationRef.current += (targetRotation - rotationRef.current) * 0.2 * delta;
                currentX += (cursorPositionRef.current.x - currentX) * 0.5 * delta;
                currentY += (cursorPositionRef.current.y - currentY) * 0.5 * delta;

                setX(currentX - offset);
                setY(currentY - offset);
                setRotation(rotationRef.current);

                requestAnimationFrame(draw);
            }

            requestAnimationFrame(draw);
        }

        function handleClick(e: MouseEvent) {
            const target = e.target as HTMLElement;
            if (target.closest('.dropdown-option')) {
                handleStopHover(); // remove hovering state when clicking dropdown selection
            }
            clickTween.play(0);
        }

        function handleMouseMove(e: MouseEvent) {
            if (!cursorRef.current) return;
            cursorPositionRef.current = { x: e.clientX, y: e.clientY }; // update cursor position
            const target = e.target as HTMLElement;

            // check if target should trigger hover event
            for (let i = 0; i < hoverTargets.length; i++) {
                const hoverable = target.closest(hoverTargets[i]!);
                if (hoverable) {
                    handleHover();
                    return;
                }
            }
            // remove hovering state if no hoverable target is found
            handleStopHover();
        }

        function handleHover() {
            isHoveringRef.current = true;
            if (cursorRef.current?.classList.contains('active')) {
                return;
            }
            cursorRef.current?.classList.add('active');
        }

        function handleStopHover() {
            isHoveringRef.current = false;
            cursorRef.current?.classList.remove('active');
        }

        return () => {
            controller.abort(); // cleanup registered events
        };
    }, []);

    return cursorRef;
}

function getClickTween() {
    const recoil = 3; // click animation line offset
    const clickStart = 0.075; // duration of first part of click animation
    const clickCooldown = 0.15; // duration of second part of click animation

    return gsap
        .timeline({ paused: true })
        .to('.cursor-line-top', {
            y: `-=${recoil}`,
            duration: clickStart,
            ease: 'power1.out',
        })
        .to(
            '.cursor-line-right',
            {
                x: `+=${recoil}`,
                duration: clickStart,
                ease: 'power1.out',
            },
            '<',
        )
        .to(
            '.cursor-line-bottom',
            {
                y: `+=${recoil}`,
                duration: clickStart,
                ease: 'power1.out',
            },
            '<',
        )
        .to(
            '.cursor-line-left',
            {
                x: `-=${recoil}`,
                duration: clickStart,
                ease: 'power1.out',
            },
            '<',
        )

        .to('.cursor-line-top', {
            y: `+=${recoil}`,
            duration: clickCooldown,
        })
        .to(
            '.cursor-line-right',
            {
                x: `-=${recoil}`,
                duration: clickCooldown,
            },
            '<',
        )
        .to(
            '.cursor-line-bottom',
            {
                y: `-=${recoil}`,
                duration: clickCooldown,
            },
            '<',
        )
        .to(
            '.cursor-line-left',
            {
                x: `+=${recoil}`,
                duration: clickCooldown,
            },
            '<',
        );
}

export default useCursor;
