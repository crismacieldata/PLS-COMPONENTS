import { Container } from './style';
import {
	IconArrowLeft,
	IconArrowRight,
	IconCalendar,
	IconCheck,
	IconClose,
	IconDownload,
	IconGrid,
	IconList,
	IconMinus,
	IconPDF,
	IconPlay,
	IconPlus,
	IconReport,
	IconSave
} from '../../Icons';
import { v4 as uuidv4 } from 'uuid';

interface ButtonIconsProps extends React.ComponentPropsWithoutRef<'button'> {
	icon:
		| 'play'
		| 'close'
		| 'check'
		| 'report'
		| 'pdf'
		| 'download'
		| 'list'
		| 'grid'
		| 'calendar'
		| 'arrowLeft'
		| 'arrowRight'
		| 'save'
		| 'plus'
		| 'minus';
	tooltip: string;
	bgColor?: string;
}

const ButtonIcon = (props: ButtonIconsProps) => {
	const { icon = 'play', tooltip, bgColor = 'var(--grey-background-3)' } = props;
	const classTooltipName = `${uuidv4()}-tooltip`;
	const classTooltip: string = tooltip ? classTooltipName : '';

	const renderIcon = () => {
		switch (icon) {
			case 'play':
				return <IconPlay />;
			case 'close':
				return <IconClose />;
			case 'check':
				return <IconCheck />;
			case 'report':
				return <IconReport />;
			case 'pdf':
				return <IconPDF />;
			case 'download':
				return <IconDownload />;
			case 'list':
				return <IconList />;
			case 'grid':
				return <IconGrid />;
			case 'calendar':
				return <IconCalendar />;
			case 'arrowLeft':
				return <IconArrowLeft size={20} />;
			case 'arrowRight':
				return <IconArrowRight size={20} />;
			case 'save':
				return <IconSave size={24} />;
			case 'plus':
				return <IconPlus size={20} />;
			case 'minus':
				return <IconMinus size={20} />;
		}
	};

	return (
		<Container {...props} style={{ backgroundColor: bgColor }} className={classTooltip}>
			{renderIcon()}
		</Container>
	);
};

export default ButtonIcon;
