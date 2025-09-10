import React from 'react';
import './hobbyCard.css';

type Props = {
    title: string;
    index: number;
    src: string;
    alt: string;
    thumbnail: string;
};

function HobbyCard({ ...props }: Props) {
    return (
        <div className="hobbyCard" data-index={props.index}>
            <div className="hobbyCard-cover">
                <h3 className="hobbyCard-title">{props.title}</h3>
            </div>
            <video
                className="hobbyCard-gif"
                src={props.src}
                controls={false}
                loop={true}
                poster={props.thumbnail}
                muted
            />
        </div>
    );
}

export default React.memo(HobbyCard);
