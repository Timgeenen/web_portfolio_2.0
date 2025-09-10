import type { ColorSchemeData } from '@Data';
import './colorSchemeCircle.css';

type Props = ColorSchemeData & React.ComponentPropsWithRef<'svg'>;

function ColorSchemeCircle({ ...props }: Props) {
    const gradientId = `scheme-gradient-${props.scheme}`;
    return (
        <svg
            {...props}
            viewBox="0 0 10 10"
            className={`colorScheme-circle ${props.className ? props.className : ''}`}
        >
            <defs>
                <linearGradient id={gradientId}>
                    <stop offset="0%" stopColor={props.primary_color1} />
                    <stop offset="100%" stopColor={props.primary_color2} />
                </linearGradient>
            </defs>
            <circle fill={`url(#${gradientId})`} cx={5} cy={5} r={5} />
        </svg>
    );
}

export default ColorSchemeCircle;
