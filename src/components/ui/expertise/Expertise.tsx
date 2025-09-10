import './Expertise.css';

type Props = {
    title: string;
    content: string;
};

function Expertise({ ...props }: Props) {
    return (
        <div className="expertise">
            <div className="animated-border" />
            <div className="expertise-card-content">
                <h3 dangerouslySetInnerHTML={{ __html: props.title }}></h3>
                <div className="expertise-divider" />
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Expertise;
