import { useAnimations, useInitialLoad } from '@Hooks';
import {
    BioPage,
    ContactPage,
    ExpertisePage,
    Frontpage,
    HobbyPage,
    LoadingPage,
    MouseTrailCanvas,
    Navbar,
    ProjectsPage,
    TechPage,
    TimelinePage,
    WaveBackground
} from '@Layouts';
import { ProgressBar, ToTopButton } from '@UI';
import gsap from 'gsap';
import {
    DrawSVGPlugin,
    ScrambleTextPlugin,
    ScrollToPlugin,
    ScrollTrigger,
    SplitText,
} from 'gsap/all';
import { useEffect } from 'react';
import Cursor from './components/ui/cursor/Cursor';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText, DrawSVGPlugin, ScrambleTextPlugin);

function App() {
    const loaded = useInitialLoad();
    useEffect(() => {
        if (loaded) {
            document.body.classList.remove('no-scroll'); //make body scrollable after page loaded
        }
    }, [loaded]);

    useAnimations({ loaded });
    return (
        <>
            {/* Fixed elements */}
            <LoadingPage />
            <MouseTrailCanvas loaded={loaded} />
            <Navbar />
            <ProgressBar />
            <ToTopButton />
            <Cursor />

            {/* Content */}
            <Frontpage />
            <>
                <ProjectsPage />
                <BioPage />
                <WaveBackground>
                    <TechPage />
                    <TimelinePage />
                </WaveBackground>
                <ExpertisePage />
                <HobbyPage />
                {/* <TestimonialPage /> */}
                <ContactPage />
            </>
        </>
    );
}

export default App;
