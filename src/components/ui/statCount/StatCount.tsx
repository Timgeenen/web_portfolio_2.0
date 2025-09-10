import './statCount.css';

type Props = {
    param: string;
    count: number;
    operator?: string;
};

function StatCount({ ...props }: Props) {
    return (
        <div className="statCount">
            <p className="statCount-count">
                {props.count}
                {props.operator && <span className="statCount-operator">{props.operator}</span>}
            </p>
            <p className="statCount-param">{props.param}</p>
        </div>
    );
}

export default StatCount;
