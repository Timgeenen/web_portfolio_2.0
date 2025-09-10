import './popUp.css';

type Props = {
    onClose: () => void;
    message: string;
    isSuccess: boolean;
};

function PopUp({ ...props }: Props) {
    return (
        <div className="popUp">
            <h3 className="popUp-header">
                {props.isSuccess ? 'Email Success' : 'Something went wrong'}
            </h3>
            <p className="popUp-text">{props.message}</p>
            <button className="popUp-button" onClick={props.onClose}>
                Close
            </button>
        </div>
    );
}

export default PopUp;
