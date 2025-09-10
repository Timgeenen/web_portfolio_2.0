type Props = {} & React.ComponentPropsWithRef<'rect'>;

function Box({ ...props }: Props) {
    return <rect {...props} z={0} className="boxGrid-box" fill={`url(#shared-grid-gradient)`} />;
}

export default Box;
