import { COLOR_SCHEMES, type ColorSchemes } from '@Data';
import ColorSchemeCircle from '../colorSchemeCircle/ColorSchemeCircle';
import './Dropdown.css';

type Props = {
    active: string;
    handleClick: (scheme: ColorSchemes) => void;
} & React.ComponentPropsWithRef<'ul'>;

function Dropdown({ ...props }: Props) {
    return (
        <ul {...props} className="dropdown-list">
            {COLOR_SCHEMES.map((data) => {
                if (data.scheme === props.active) return;
                return (
                    <li
                        key={`dropdown-${data.scheme}`}
                        className="dropdown-option"
                        onClick={() => props.handleClick(data.scheme)}
                    >
                        <ColorSchemeCircle {...data} />
                    </li>
                );
            })}
        </ul>
    );
}

export default Dropdown;
