import React from 'react';

type Props = {
    gradientId: string;
} & React.ComponentPropsWithRef<'svg'>;

function Ellipse({ ...props }: Props) {
    return (
        <svg {...props} className="ellipse-svg" viewBox="0 0 160 40">
            <linearGradient id={props.gradientId} gradientTransform="rotate(90 .5 .5)">
                <stop offset="0%" stopColor="var(--primary-color1)" />
                <stop offset="100%" stopColor="var(--primary-color2)" />
            </linearGradient>
            <ellipse
                className="ellipse"
                fill={`url(#${props.gradientId})`}
                cx={80}
                cy={20}
                rx={80}
                ry={20}
                rotate={30}
            />
        </svg>
    );
}

export default Ellipse;
