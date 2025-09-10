import { getGradientAnimation, scrollToLabel } from '@Utils';
import gsap from 'gsap';

export default function projectsPageAnimation() {
    let currentProject = -1;
    const progress = gsap.utils.toArray('.projects-progress') as Element[];
    const projects = gsap.utils.toArray('.project') as Element[];

    const toggleProjectTweens = projects.map((project) => getToggleProjectTween(project));
    const initialProjectData: { rad: number; rotation: number }[] = [];
    const projectScrollStart = 0;
    const projectScrollEnd = 1;
    const projectScrollTotal = projectScrollEnd - projectScrollStart;
    const maxRotation = 360 - 360 / projects.length;
    const maxRad = Math.PI * 2 - (Math.PI * 2) / projects.length;
    let scrollPercent = 0;
    let needsUpdate = false;

    function rotateWheel() {
        if (needsUpdate) {
            needsUpdate = false;
            projects.forEach((project, i) => {
                const newRotation = initialProjectData[i]!.rotation - maxRotation * scrollPercent;
                let newRadian = initialProjectData[i]!.rad - scrollPercent * maxRad;
                newRadian = newRadian < 0 ? (newRadian += Math.PI * 2) : newRadian;
                gsap.set(project, {
                    xPercent: Math.cos(newRadian) * 150 - 50,
                    yPercent: Math.sin(newRadian) * 150,
                    rotation: newRotation,
                });
            });
        }
        requestAnimationFrame(rotateWheel);
    }
    requestAnimationFrame(rotateWheel);

    const tl = gsap.timeline({
        defaults: {
            duration: 1,
        },
        scrollTrigger: {
            trigger: '.projects-page-wrapper',
            start: 'top top',
            end: () => `+=${projects.length * 1000}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 0.5,
            snap: {
                snapTo: 'labels',
                delay: 0.1,
            },
            onUpdate: (self) => {
                const i = Math.floor(
                    ((self.progress - projectScrollStart) / projectScrollTotal) * projects.length,
                );
                if (i !== currentProject && i < projects.length) {
                    progress[i]?.classList.toggle('active');
                    progress[currentProject]?.classList.toggle('active');
                    toggleProjectTweens[currentProject]?.reverse();
                    toggleProjectTweens[i]?.play();
                    currentProject = i;
                }
                if (self.progress >= projectScrollStart && self.progress <= projectScrollEnd) {
                    scrollPercent = (self.progress - projectScrollStart) / projectScrollTotal;
                    needsUpdate = true;
                }
            },
        },
    });

    projects.forEach((project, i) => {
        const rotation = i * (360 / projects.length);
        const rad = degToRad(rotation);
        initialProjectData.push({ rad, rotation });

        gsap.set(project, {
            autoAlpha: 0.5,
            rotation: rotation,
            xPercent: Math.cos(rad) * 150 - 50,
            yPercent: Math.sin(rad) * 150,
        });
    });

    tl.addLabel('header');

    tl.addLabel('in');
    tl.to(
        '.projects',
        {
            duration: 1, // timeline total
        },
        'in',
    );

    progress.forEach((button, i) => {
        const label = `project${i}`;
        const time =
            ((tl.duration() - projectScrollStart) / (projects.length - 1)) * i + projectScrollStart;
        function scroll() {
            scrollToLabel(label, tl);
        }
        tl.addLabel(label, time);
        button.addEventListener('click', scroll);
        projects[i]!.addEventListener('click', scroll);
    });

    const gradientTween = getGradientAnimation({ gradientId: 'project-ellipse-gradient' });
    const gradientTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.projects-page-wrapper',
            start: 'top bottom',
            end: `+=${(projects.length + 2) * 1000}`,
            onEnter: () => gradientTween.resume(),
            onEnterBack: () => gradientTween.resume(),
            onLeave: () => gradientTween.pause(),
            onLeaveBack: () => gradientTween.pause(),
        },
    });

    return [tl, gradientTl];
}

function degToRad(degrees: number): number {
    return (degrees < 90 ? degrees + 270 : degrees - 90) * (Math.PI / 180);
}

function getToggleProjectTween(project: Element): gsap.core.Timeline {
    const titleWrapper = project.querySelector('.project-title-wrapper');
    const mirror1 = project.querySelector('.project-mirror1');
    const mirror2 = project.querySelector('.project-mirror2');
    gsap.set(titleWrapper, {
        y: 170,
        height: 70,
    });
    return gsap
        .timeline({ paused: true, defaults: { duration: 0.5, ease: 'power1.inOut' } })
        .to(
            project,
            {
                autoAlpha: 1,
            },
            0,
        )

        .to(
            titleWrapper,
            {
                y: 0,
                height: 200,
                duration: 0.5,
            },
            0,
        )

        .to(
            mirror1,
            {
                y: -22.5,
            },
            0.025,
        )

        .to(
            mirror2,
            {
                y: -37.5,
            },
            0.05,
        );
}
