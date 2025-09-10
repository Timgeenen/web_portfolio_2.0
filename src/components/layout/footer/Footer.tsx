import { FOOTER_LINKS } from '@Data';
import './footer.css';
import { FaArrowRightLong } from 'react-icons/fa6';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-info">
                    <p>
                        This website was designed by{' '}
                        <a
                            className="footer-authorLink"
                            href="https://www.linkedin.com/in/aimitakanaga/"
                            target="blank"
                        >
                            Aimi Takanaga
                        </a>{' '}
                        <br />
                        and coded by{' '}
                        <a className="footer-authorLink" href="" target="blank">
                            Tim Geenen
                        </a>
                    </p>
                </div>
                <div className="footer-linksWrapper">
                    {FOOTER_LINKS.map((data) => (
                        <a
                            {...data}
                            className="footer-link"
                            target={data.download ? '' : 'blank'}
                            rel="noopener noreferrer"
                        >
                            <span>{data.title}</span>
                            <FaArrowRightLong className="footer-linkArrow" />
                        </a>
                    ))}
                </div>
            </div>
            <h2 className="footer-name">TIM GEENEN</h2>
        </footer>
    );
}

export default Footer;
