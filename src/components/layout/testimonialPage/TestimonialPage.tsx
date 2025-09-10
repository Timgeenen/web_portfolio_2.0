import { TESTIMONIALS } from '@Data';
import './testimonialPage.css';
import { Testimonial } from '@UI';

function TestimonialPage() {
    const testimonials = TESTIMONIALS.map((data) => <Testimonial {...data} />);
    return (
        <section className="testimonial-page">
            <h2 className="testimonial-header">
                Result-Driven <span>Testimonials</span>
            </h2>
            <ul className="testimonial-list">
                {...testimonials}
                {...testimonials}
            </ul>
        </section>
    );
}

export default TestimonialPage;
