import './boxGrid.css';
import useCreateGrid from './useCreateGrid';

type Props = {
    grid: [columns: number, rows: number];
    gridWidth?: number;
    boxGap?: number;
    containerProps?: React.ComponentPropsWithRef<'svg'>;
    rowProps?: React.ComponentPropsWithRef<'div'>;
    boxProps?: React.ComponentPropsWithRef<'rect'>;
};

function BoxGrid({ ...props }: Props) {
    const { boxes, containerStyles } = useCreateGrid({ ...props });
    const gridWidth = props.gridWidth ?? 100;
    const gridHeight = (gridWidth / props.grid[0]) * props.grid[1];
    return (
        <>
            <svg
                width={gridWidth}
                height={gridWidth}
                {...props.containerProps}
                className="boxGrid-container"
                style={containerStyles}
            >
                <defs>
                    <linearGradient
                        id="shared-grid-gradient"
                        gradientUnits="userSpaceOnUse"
                        x1={0}
                        x2={gridWidth}
                        y1={0}
                        y2={gridHeight}
                    >
                        <stop offset="30%" stopColor="var(--primary-color1)" />
                        <stop offset="70%" stopColor="var(--primary-color2)" />
                    </linearGradient>

                    <radialGradient id="radial-gradient-fade">
                        <stop offset="0%" stopColor="black" />
                        <stop offset="50%" stopColor="gray" />
                        <stop offset="95%" stopColor="white" />
                    </radialGradient>
                    <mask id="radial-fade-mask">
                        <rect
                            width={gridWidth}
                            height={gridHeight}
                            fill="url(#radial-gradient-fade)"
                        />
                    </mask>
                </defs>
                {...boxes}
                <rect
                    id="boxGrid-mask"
                    fill="var(--background-color)"
                    mask="url(#radial-fade-mask)"
                    x={0}
                    width={gridWidth}
                    y={0}
                    height={gridHeight}
                />
            </svg>
        </>
    );
}

export default BoxGrid;
