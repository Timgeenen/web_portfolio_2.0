import './toTopButton.css';
import { IconButton } from '@UI';
import { FaArrowUp } from 'react-icons/fa6';
import { scrollToElement } from '@Utils';

function ToTopButton() {
    return (
        <IconButton
            className="toTopButton"
            onClick={() => scrollToElement(document.getElementById('frontpage')!, 2000, 0, true)}
        >
            <FaArrowUp className="toTopButton-arrow" />
        </IconButton>
    );
}

export default ToTopButton;
