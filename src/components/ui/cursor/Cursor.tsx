import useCursor from './useCursor';
import './cursor.css';

function Cursor() {
    const padding = 4;
    const lineLength = 11;
    const lineWidth = 3;
    const boxSize = 40;
    const cursorRef = useCursor();

    return (
        <svg ref={cursorRef} className="cursor" viewBox={`0 0 ${boxSize} ${boxSize}`}>
            <rect
                className="cursor-line cursor-line-top"
                x={(boxSize - lineWidth) / 2}
                y={padding}
                rx={lineWidth}
                ry={lineWidth}
                width={lineWidth}
                height={lineLength}
            />
            <rect
                className="cursor-line cursor-line-right"
                x={boxSize - lineLength - padding}
                y={(boxSize - lineWidth) / 2}
                rx={lineWidth}
                ry={lineWidth}
                width={lineLength}
                height={lineWidth}
            />
            <rect
                className="cursor-line cursor-line-bottom"
                x={(boxSize - lineWidth) / 2}
                y={boxSize - lineLength - padding}
                rx={lineWidth}
                ry={lineWidth}
                width={lineWidth}
                height={lineLength}
            />
            <rect
                className="cursor-line cursor-line-left"
                x={padding}
                y={(boxSize - lineWidth) / 2}
                rx={lineWidth}
                ry={lineWidth}
                width={lineLength}
                height={lineWidth}
            />
            <circle className="cursor-dot" r={lineWidth * 0.75} cx={20} cy={20} />
        </svg>
    );
}

export default Cursor;
