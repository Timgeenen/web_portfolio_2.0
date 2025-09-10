import { HOBBY_DATA } from '@Data';
import { HobbyCard } from '@UI';
import './hobbyPage.css';
import useGifObserver from './useGifObserver';

function HobbyPage() {
    useGifObserver();
    const hobbies = HOBBY_DATA.map((hobby, i) => (
        <HobbyCard {...hobby} index={i} src={hobby.gif} />
    ));

    return (
        <section className="hobby-page">
            <h2 className="hobby-header">When I'm Not Coding...</h2>
            <div className="hobby-content">{...hobbies}</div>
        </section>
    );
}

export default HobbyPage;
