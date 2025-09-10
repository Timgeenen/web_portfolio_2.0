import gsap from 'gsap';

type Props = {
    gradientId: string;
};

export default function getGradientAnimation({ ...props }: Props) {
    // const colors = [
    //             'var(primary-color1)',
    //             'var(primary-color2)',
    //             'var(--scheme-primary-color1-opaque_50)',
    //             'var(--scheme-primary-color2-opaque_50)',
    //             'var(--scheme-primary-color1-opaque_75)',
    //             'var(--scheme-primary-color2-opaque_75)',
    //         ];

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

    // gsap.set(`#${props.gradientId} stop:nth-child(1)`, {
    //     stopColor: () => 'var(--scheme-primary-color1)'
    // })
    // gsap.set(`#${props.gradientId} stop:nth-child(2)`, {
    //     stopColor: () => 'var(--scheme-primary-color2)'
    // })

    // const changeGradientStop1 = gsap.to(`#${props.gradientId} stop:nth-child(1)`, {
    //     paused: true,
    //     yoyo: true,
    //     yoyoEase: 'power1.inOut',
    //     repeatRefresh: true,
    //     duration: () => gsap.utils.random(1, 3),
    //     repeat: -1,
    //     stopColor: () =>
    //         gsap.utils.random(colors),
    // });

    // const changeGradientStop2 = gsap.to(`#${props.gradientId} stop:nth-child(2)`, {
    //     paused: true,
    //     yoyo: true,
    //     yoyoEase: 'power1.inOut',
    //     repeatRefresh: true,
    //     duration: () => gsap.utils.random(1, 3),
    //     repeat: -1,
    //     stopColor: () =>
    //         gsap.utils.random(colors),
    // });

    return rotateGradient;
}
