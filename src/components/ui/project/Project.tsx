import { type ComponentPropsWithRef } from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import './Project.css';
import { IconButton } from '@UI';

type ImgData = {
    src: string;
    alt: string;
};

type Props = {
    index: number;
    img1: ImgData;
    img2: ImgData;
    img3: ImgData;
    url: string;
    title: string;
} & ComponentPropsWithRef<'li'>;

function Project({ ...props }: Props) {
    return (
        <li
            {...props}
            className={`project ${props.className ? props.className : ''}`}
            id={`project${props.index}`}
        >
            <div className="project-title-wrapper">
                <h3 className="project-title">{props.title}</h3>
            </div>
            <div className="project-mirror1" />
            <div className="project-mirror2" />
            <div className="project-content">
                <img className="project-image" loading="lazy" {...props.img1} />
                <img className="project-image" loading="lazy" {...props.img2} />
                <img className="project-image" loading="lazy" {...props.img3} />
            </div>
            <IconButton className="project-button" href={props.url}>
                <IoArrowForwardOutline className="button-arrow-icon" />
            </IconButton>
        </li>
    );
}

export default Project;
