import { generateWavePath } from '@Utils';
import './HeroCircle.css';

function HeroCircle() {
    return (
        <svg viewBox="0 0 400 400" className="heroCircle-circle-svg">
            <defs>
                <linearGradient id="circle-gradient" gradientTransform="rotate(90 .5 .5)">
                    <stop offset="0%" stopColor="var(--primary-color1)" />
                    <stop offset="100%" stopColor="var(--primary-color2)" />
                </linearGradient>
                <mask id="wave-mask">
                    <circle cx={200} cy={200} r={200} fill="white" />
                    <path
                        d={generateWavePath(5, 400, 220, 0, 400)}
                        className="wave-mask-path wave-mask-path1"
                        fill="rgba(0,0,0,0.05)"
                    />
                    <path
                        d={generateWavePath(10, 500, 240, 0, 400)}
                        className="wave-mask-path wave-mask-path2"
                        fill="rgba(0,0,0,0.1)"
                    />
                    <path
                        d={generateWavePath(5, 600, 260, 0, 400)}
                        className="wave-mask-path wave-mask-path3"
                        fill="rgba(0,0,0,0.15)"
                    />
                </mask>
                <mask id="image-clip-mask">
                    <circle cx={200} cy={200} r={200} fill="white" />
                </mask>
            </defs>
            <circle
                cx={200}
                cy={200}
                r={200}
                className="heroCircle-circle heroCircle-circle-bg"
            ></circle>
            <circle
                cx={200}
                cy={200}
                r={200}
                className="heroCircle-circle"
                fill="url(#circle-gradient)"
                mask="url(#wave-mask)"
            ></circle>
            <image
                x={65}
                y={35}
                width={270}
                className="heroCircle-heroImg"
                href="/frontpage_image.webp"
                mask="url(#image-clip-mask)"
            />
        </svg>
    );
}

export default HeroCircle;
