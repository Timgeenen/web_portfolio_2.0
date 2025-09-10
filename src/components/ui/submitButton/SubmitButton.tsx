import React from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import './submitButton.css';

type Props = {
    isPending: boolean;
} & React.ComponentPropsWithRef<'button'>;

function SubmitButton({ ...props }: Props) {
    function handleClick() {
        const plane = document.querySelector('.submit-button-paperPlane');
        if (!plane) return;
        if (plane.classList.contains('active')) {
            plane.classList.remove('active');
        }
        setTimeout(() => {
            plane.classList.toggle('active');
        }, 0);
    }
    return (
        <div className="submit-button-wrapper">
            <button
                {...props}
                disabled={props.isPending}
                className="submit-button"
                onClick={handleClick}
            >
                <span className="submit-button-overflow-wrapper">
                    <span>{props.isPending ? 'Contacting...' : 'Contact Me'}</span>
                    <FaRegPaperPlane className="submit-button-paperPlane" />
                </span>
            </button>
        </div>
    );
}

export default SubmitButton;
