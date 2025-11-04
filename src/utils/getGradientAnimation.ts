import gsap from 'gsap';

type Props = {
    gradientId: string;
};

export default function getGradientAnimation({ ...props }: Props) {
    const rotateGradient = gsap.to(`#${props.gradientId}`, {
        paused: true,
        yoyo: true,
        yoyoEase: 'power1.inOut',
        repeat: -1,
        repeatRefresh: true,
        duration: 2,
        attr: {
            gradientTransform: () => `rotate(${gsap.utils.random(0, 360)} .5 .5)`,
        },
    });

    return rotateGradient;
}
