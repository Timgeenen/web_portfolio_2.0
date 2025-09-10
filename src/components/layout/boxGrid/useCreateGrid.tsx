import { Box } from '@UI';
import React, { type JSX } from 'react';

type Props = {
    grid?: [columns: number, rows: number];
    gridWidth?: number;
    boxGap?: number;
    containerProps?: React.ComponentPropsWithRef<'svg'>;
    boxProps?: React.ComponentPropsWithRef<'rect'>;
};

function useCreateGrid({ ...props }: Props) {
    const columnCount = props.grid ? props.grid[0] : 5;
    const rowCount = props.grid ? props.grid[1] : 5;
    const width = props.gridWidth ?? 100;
    const gap = props.boxGap ?? 1;
    const boxSize = width / columnCount;

    const containerStyles: React.CSSProperties = {
        ...props.containerProps?.style,
        width: width,
        height: boxSize * rowCount,
    };

    const boxStyles: React.CSSProperties = {
        ...props.boxProps?.style,
        width: boxSize - gap,
        height: boxSize - gap,
        display: 'inline-block',
    };

    const boxes: JSX.Element[] = [];

    for (let i = 0; i < rowCount; i++) {
        const y = i * boxSize + gap / 2;
        for (let j = 0; j < columnCount; j++) {
            const x = j * boxSize + gap / 2;
            boxes.push(<Box {...props.boxProps} style={boxStyles} x={x} y={y} rx={boxSize / 10} />);
        }
    }

    return { boxes, containerStyles };
}

export default useCreateGrid;
