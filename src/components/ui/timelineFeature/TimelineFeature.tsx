import './TimelineFeature.css';

type Props = { index: number; title: string; content: string; date: string };

function TimelineFeature({ index, title, content, date }: Props) {
    return (
        <li className="timeline-feature">
            <svg className="timeline-circle-svg" viewBox="0 0 10 10">
                <circle
                    id={`timeline-circle${index}`}
                    cx={5}
                    cy={5}
                    r={4}
                    className="timeline-circle"
                />
            </svg>
            <div id={`timeline-content${index}`} className="timeline-feature-content">
                <p className="timeline-date">{date}</p>
                <h3 className="timeline-title">{title}</h3>
                <p className="timeline-text" dangerouslySetInnerHTML={{ __html: content }}></p>
            </div>
        </li>
    );
}

export default TimelineFeature;
