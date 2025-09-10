import { useRef } from 'react';
import useMouseTrail from './useMouseTrail';

type Props = {
    loaded: boolean;
};

function MouseTrailCanvas({ ...props }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useMouseTrail({ canvasRef, loaded: props.loaded });
    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        ></canvas>
    );
}

export default MouseTrailCanvas;
