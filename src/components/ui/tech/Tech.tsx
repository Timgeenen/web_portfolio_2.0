import { type ComponentPropsWithRef } from 'react';
import './Tech.css';

type Props = {
    title: string;
    icon: string;
    alt: string;
} & ComponentPropsWithRef<'li'>;

function Tech({ ...props }: Props) {
    return (
        <li {...props} className="tech-item">
            <div className="tech-content">
                <img className="tech-icon" loading="lazy" src={props.icon} alt={props.alt} />
                {props.title}
            </div>
        </li>
    );
}

export default Tech;
