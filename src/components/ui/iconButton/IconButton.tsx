import type { ComponentPropsWithRef } from 'react';
import './IconButton.css';

type Props = {} & ComponentPropsWithRef<'a'>;

function IconButton({ children, ...props }: Props) {
    return (
        <a
            {...props}
            className={`icon-button ${props.className ? props.className : ''}`}
            target="_blank"
            rel={`noopener noreferrer ${props.rel ? props.rel : ''}`}
        >
            {children}
        </a>
    );
}

export default IconButton;
