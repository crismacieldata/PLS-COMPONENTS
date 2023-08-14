import { Container } from './style';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	theme?: 'default' | 'primary' | 'outlineRed' | 'submit' | 'redMiddle' | 'outlineGreen';
	width?: number;
}

const Button = (props: ButtonProps) => {
	const { children, theme = 'default', width = 'inherit' } = props;

	const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (props.onClick) props.onClick(e);

		if (e.stopPropagation) e.stopPropagation();
	};

	return (
		<Container type={props.type} onClick={onClick} style={{ width: `${width}px` }} className={theme}>
			{children}
		</Container>
	);
};

export default Button;
