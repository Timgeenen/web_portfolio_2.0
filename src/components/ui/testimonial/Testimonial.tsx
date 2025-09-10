import { FaStar } from 'react-icons/fa';
import { TbQuoteFilled } from 'react-icons/tb';
import './testimonial.css';

type Props = {
    name: string;
    icon: string;
    alt: string;
    function: string;
    rating: number;
    testimonial: string;
};

function Testimonial({ ...props }: Props) {
    const stars = [...Array(5).keys()].map((_, i) => (
        <FaStar
            className="testimonial-rating-star"
            style={{
                clipPath: `inset(0 ${props.rating - i > 1 ? 0 : 100 - (props.rating - i) * 100}% 0 0)`,
            }}
        />
    ));

    return (
        <li className="testimonial">
            <TbQuoteFilled className="testimonial-quotes" />
            <div className="testimonial-profile">
                <div className="testimonial-icon">
                    <img
                        src={props.icon}
                        alt={props.alt}
                        loading="lazy"
                        className="testimonial-image"
                    />
                </div>
                <div className="testimonial-credentials">
                    <h4 className="testimonial-name">{props.name}</h4>
                    <h5 className="testimonial-function">{props.function}</h5>
                </div>
            </div>
            <div className="testimonial-rating">
                <div className="testimonial-stars">{...stars}</div>
                {props.rating.toFixed(1)}
            </div>
            <p className="testimonial-review">{props.testimonial}</p>
        </li>
    );
}

export default Testimonial;
