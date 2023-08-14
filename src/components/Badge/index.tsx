import { Container } from './style';

interface BadgeProps {
	value: any;
	width?: number;
	bg?: string;
	color?: string;
	fontSize?: number;
	borderRadius?: number;
	percent?: boolean;
}

const Badge = ({ value, bg, color, fontSize = 11, width = 25, percent = false, borderRadius }: BadgeProps) => {
	const getStyle = () => {
		const style: any = {};
		if (bg) {
			style['backgroundColor'] = bg;
			style['border'] = 'none';
		}
		if (color) style['color'] = color;
		if (width) style['width'] = `${width}${percent ? '%' : 'px'}`;
		if (fontSize) style['fontSize'] = `${fontSize}px`;
		if (borderRadius) style['borderRadius'] = `${borderRadius}px`;

		return style;
	};

	return <Container style={getStyle()}>{value}</Container>;
};

export default Badge;
