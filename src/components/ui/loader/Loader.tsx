import './Loader.css';

function Loader() {
    return (
        <div className="loader">
            <div
                className="loader-progress"
                style={{
                    background:
                        'linear-gradient(90deg, var(--primary-color1), var(--primary-color2))',
                    width: '0%',
                    height: '100%',
                }}
            ></div>
            <p className="loader-percent">0%</p>
        </div>
    );
}

export default Loader;
