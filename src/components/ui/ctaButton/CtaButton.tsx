import { scrollToElement } from '@Utils';
import './ctaButton.css';
import { FaArrowRightLong } from 'react-icons/fa6';

function CtaButton() {
    const element = document.querySelector('.contact-page');
    return (
        <div className="cta-button-wrapper">
            <button
                className="cta-button"
                onClick={() => {
                    scrollToElement(element!);
                }}
            >
                <span>Work with me</span>
                <FaArrowRightLong className="cta-arrow" />
            </button>
        </div>
    );
}

export default CtaButton;
