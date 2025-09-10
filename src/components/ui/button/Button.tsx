import type { ComponentPropsWithRef } from 'react';
import './Button.css';

type Props = {
    name?: string;
} & ComponentPropsWithRef<'button'>;

function Button({ name, children, ...props }: Props) {
    return (
        <button {...props} className="button">
            {name && name}
            {children}
        </button>
    );
}

export default Button;
