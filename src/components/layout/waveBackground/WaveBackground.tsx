import { generateWavePath } from '@Utils';
import './waveBackground.css';

type Props = {} & React.ComponentPropsWithRef<'div'>;

function WaveBackground({ children }: Props) {
    return (
        <div className="wave-background">
            <div className="wave-background-sticky">
                <svg className="wave-background-svg" viewBox="50 -20 100 100">
                    <defs>
                        <linearGradient
                            id="bg-wave-gradient1"
                            gradientTransform="rotate(88)"
                            opacity={0.5}
                        >
                            <stop offset="0%" stopColor="var(--primary-color1)" />
                            <stop offset="10%" stopColor="var(--primary-color2)" />
                            <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                        <linearGradient
                            id="bg-wave-gradient2"
                            gradientTransform="rotate(90)"
                            opacity={0.6}
                        >
                            <stop offset="0%" stopColor="var(--primary-color1)" />
                            <stop offset="5%" stopColor="var(--primary-color2)" />
                            <stop offset="20%" stopColor="transparent" />
                        </linearGradient>
                        <linearGradient
                            id="bg-wave-gradient3"
                            gradientTransform="rotate(92)"
                            opacity={0.7}
                        >
                            <stop offset="0%" stopColor="var(--primary-color2)" />
                            <stop offset="7.5%" stopColor="var(--primary-color1)" />
                            <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <path
                        className="wave-background-wave"
                        x={0}
                        y={0}
                        d={generateWavePath(10, 150, 1, 1, 200)}
                        fill="url(#bg-wave-gradient1)"
                    />
                    <path
                        className="wave-background-wave"
                        x={0}
                        y={0}
                        d={generateWavePath(10, 150, 1, 1, 200)}
                        fill="url(#bg-wave-gradient2)"
                    />
                    <path
                        className="wave-background-wave"
                        x={0}
                        y={0}
                        d={generateWavePath(10, 150, 1, 1, 200)}
                        fill="url(#bg-wave-gradient3)"
                    />
                </svg>
            </div>
            {children}
        </div>
    );
}

export default WaveBackground;
