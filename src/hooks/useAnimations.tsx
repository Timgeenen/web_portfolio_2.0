import { useGSAP } from '@gsap/react';
import {
    bioPageAnimation,
    boxGridAnimation,
    contactPageAnimation,
    expertisePageAnimation,
    frontpageAnimation,
    hobbyPageAnimation,
    loadingPageAnimation,
    projectsPageAnimation,
    techPageAnimation,
    testimonialPageAnimation,
    timelinePageAnimation,
    waveBackgroundAnimation,
} from '@Layouts';
import { heroCircleAnimation, progressBarAnimation } from '@UI';
import gsap from 'gsap';

type Props = {
    loaded: boolean;
};

function useAnimations({ ...props }: Props) {
    const masterTimeline = gsap.timeline();

    useGSAP(() => {
        if (props.loaded) {
            masterTimeline.add(heroCircleAnimation());
            masterTimeline.add(loadingPageAnimation());
            masterTimeline.add(frontpageAnimation(), '-=25%');
            masterTimeline.add(projectsPageAnimation());
            masterTimeline.add(bioPageAnimation());
            masterTimeline.add(boxGridAnimation());
            masterTimeline.add(techPageAnimation());
            masterTimeline.add(timelinePageAnimation());
            masterTimeline.add(waveBackgroundAnimation());
            masterTimeline.add(expertisePageAnimation());
            masterTimeline.add(hobbyPageAnimation());
            masterTimeline.add(testimonialPageAnimation());
            masterTimeline.add(contactPageAnimation());
            progressBarAnimation(); // keep last for correct max scroll value
        }
    }, [props.loaded]);
}

export default useAnimations;
