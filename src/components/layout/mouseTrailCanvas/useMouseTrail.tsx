import { useEffect, useRef, type RefObject } from 'react';

type Props = {
    loaded: boolean;
    canvasRef: RefObject<HTMLCanvasElement | null>;
};

type MousePosition = {
    x: number;
    y: number;
    createdAt: number;
};

function useMouseTrail({ ...props }: Props) {
    const pointsRef = useRef<MousePosition[]>([]);
    const rootRef = useRef(document.documentElement);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller; // pass to register event listeners
        const ctx = props.canvasRef.current?.getContext('2d');
        const maxPoints = 150; // max trail length
        const decaySpeed = 175; // how fast points disappear in ms

        if (!props.loaded) return;
        if (!props.canvasRef.current) return;
        if (!ctx) return;

        function isPhone() {
            const isSmallScreen = window.matchMedia('(max-width: 767px)').matches;
            const isTouch = window.matchMedia('(pointer: coarse)').matches;
            return isSmallScreen && isTouch;
        }

        function resize() {
            if (!props.canvasRef.current) return;
            props.canvasRef.current.width = window.innerWidth;
            props.canvasRef.current.height = window.innerHeight;
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (isPhone()) return;
            pointsRef.current.push({ x: e.clientX, y: e.clientY, createdAt: performance.now() });
            if (pointsRef.current.length > maxPoints) {
                pointsRef.current.shift(); // remove oldest point
            }
        };

        function draw() {
            if (!ctx) return; // no canvas
            if (!props.canvasRef.current) return; // no canvas
            if (pointsRef.current.length < 1) {
                // nothing to draw
                requestAnimationFrame(draw);
                return;
            }

            const points = pointsRef.current!;
            let decayedIndex: number | null = null;
            const primaryColor = getComputedStyle(rootRef.current)
                .getPropertyValue('--primary-color1')
                .trim()
                .slice(0, -3); // primary rgba without opacity

            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // clear canvas

            for (let i = 1; i < points.length; i++) {
                const { x: startX, y: startY, createdAt: startCreatedAt } = points[i - 1]!;
                const { x: endX, y: endY, createdAt: endCreatedAt } = points[i]!;

                if (performance.now() - endCreatedAt > decaySpeed) {
                    // update highest decayed index
                    decayedIndex = i;
                }

                drawQuadraticLine(
                    startX,
                    startY,
                    endX,
                    endY,
                    startCreatedAt,
                    endCreatedAt,
                    primaryColor,
                );
            }

            if (decayedIndex) {
                pointsRef.current.splice(0, decayedIndex); // remove expired points
                decayedIndex = null;
            }

            requestAnimationFrame(draw);
        }

        function drawQuadraticLine(
            startX: number,
            startY: number,
            endX: number,
            endY: number,
            startCreatedAt: number,
            endCreatedAt: number,
            primaryColor: string,
        ) {
            if (!ctx) return;
            const now = performance.now();
            const startOpacity = ((decaySpeed - (now - startCreatedAt)) / decaySpeed).toFixed(3);
            const endOpacity = ((decaySpeed - (now - endCreatedAt)) / decaySpeed).toFixed(3);
            const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
            gradient.addColorStop(0, `${primaryColor} ${startOpacity})`);
            gradient.addColorStop(1, `${primaryColor} ${endOpacity})`);

            const cpx = (startX + endX) / 2;
            const cpy = (startY + endY) / 2;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.quadraticCurveTo(cpx, cpy, endX, endY);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.lineJoin = 'round';
            ctx.stroke();
        }

        window.addEventListener('resize', resize, { signal });
        document.addEventListener('mousemove', handleMouseMove, { signal });
        draw();
        resize();

        return () => {
            controller.abort(); // Remove all event listeners
        };
    }, [props.loaded]);
}

export default useMouseTrail;
