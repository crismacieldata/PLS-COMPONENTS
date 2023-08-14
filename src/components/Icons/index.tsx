import { Container } from './style';
import {
	BsArrowLeftCircleFill,
	BsArrowRightCircleFill,
	BsCalendar2Week,
	BsCheckCircle,
	BsClipboardCheckFill,
	BsDashCircle,
	BsDownload,
	BsExclamationCircle,
	BsFileEarmarkBarGraph,
	BsFileEarmarkPdf,
	BsFillCalendar2CheckFill,
	BsFillDashCircleFill,
	BsFillGrid3X3GapFill,
	BsFillPlayCircleFill,
	BsFillPlusCircleFill,
	BsPlusCircle,
	BsViewList,
	BsXCircle
} from 'react-icons/bs';
import { MdSave } from 'react-icons/md';

interface IconsProps {
	size?: number;
	color?: string;
	tooltip?: string;
	idTooltip?: string;
}

const IconCalendar2Week = (props: IconsProps) => {
	const { size = 16, color = 'var(--grey-500)' } = props;
	return (
		<Container style={{ height: `${size}px` }}>
			<BsCalendar2Week style={{ color }} />
		</Container>
	);
};

const IconDashCircle = (props: IconsProps) => {
	const { size = 16, color = 'var(--grey-500)' } = props;
	return (
		<Container style={{ height: `${size}px` }}>
			<BsDashCircle style={{ color }} />
		</Container>
	);
};

const IconExclamation = (props: IconsProps) => {
	const { size = 16, color = 'var(--grey-500)' } = props;
	return (
		<Container style={{ height: `${size}px` }}>
			<BsExclamationCircle style={{ color }} />
		</Container>
	);
};

const IconPlusCircle = (props: IconsProps) => {
	const { size = 16, color = 'var(--grey-500)' } = props;
	return (
		<Container style={{ height: `${size}px` }}>
			<BsPlusCircle style={{ color }} />
		</Container>
	);
};

const IconCheckClip = (props: IconsProps) => {
	const { size = 16, color = 'var(--grey-500)' } = props;
	return (
		<Container style={{ height: `${size}px` }}>
			<BsClipboardCheckFill style={{ color }} />
		</Container>
	);
};

const IconPlay = (props: IconsProps) => {
	const { size = 16, color = 'var(--blue)' } = props;

	return (
		<Container style={{ height: `${size}px` }}>
			<BsFillPlayCircleFill style={{ color }} />
		</Container>
	);
};

const IconClose = (props: IconsProps) => {
	const { size = 16, color = 'var(--red)' } = props;

	return (
		<Container style={{ height: `${size}px` }}>
			<BsXCircle style={{ color }} />
		</Container>
	);
};

const IconCheck = (props: IconsProps) => {
	const { size = 16, color = 'var(--green)' } = props;

	return (
		<Container style={{ height: `${size}px` }}>
			<BsCheckCircle style={{ color }} />
		</Container>
	);
};

const IconReport = (props: IconsProps) => {
	const { size = 16, color = 'var(--grey-500)' } = props;

	return (
		<Container style={{ height: `${size}px` }}>
			<BsFileEarmarkBarGraph style={{ color }} />
		</Container>
	);
};

const IconPDF = (props: IconsProps) => {
	const { size = 16, color = 'var(--grey-500)' } = props;

	return (
		<Container style={{ height: `${size}px` }}>
			<BsFileEarmarkPdf style={{ color }} />
		</Container>
	);
};

const IconDownload = (props: IconsProps) => {
	const { size = 16, color = 'var(--grey-500)' } = props;

	return (
		<Container style={{ height: `${size}px` }}>
			<BsDownload style={{ color }} />
		</Container>
	);
};

const IconList = (props: IconsProps) => {
	const { size = 16, color = 'var(--grey-500)' } = props;

	return (
		<Container style={{ height: `${size}px` }}>
			<BsViewList style={{ color }} />
		</Container>
	);
};

const IconGrid = (props: IconsProps) => {
	const { size = 16, color = 'var(--grey-500)' } = props;

	return (
		<Container style={{ height: `${size}px` }}>
			<BsFillGrid3X3GapFill style={{ color }} />
		</Container>
	);
};

const IconCalendar = (props: IconsProps) => {
	const { size = 16, color = 'var(--blue)' } = props;
	return (
		<Container style={{ height: `${size}px` }}>
			<BsFillCalendar2CheckFill style={{ color }} />
		</Container>
	);
};

const IconArrowLeft = (props: IconsProps) => {
	const { size = 16, color = 'var(--white)' } = props;
	return (
		<Container style={{ height: `${size}px` }}>
			<BsArrowLeftCircleFill style={{ color }} />
		</Container>
	);
};

const IconArrowRight = (props: IconsProps) => {
	const { size = 16, color = 'var(--white)' } = props;
	return (
		<Container style={{ height: `${size}px` }}>
			<BsArrowRightCircleFill style={{ color }} />
		</Container>
	);
};

const IconSave = (props: IconsProps) => {
	const { size = 16, color = 'var(--white)' } = props;
	return (
		<Container style={{ height: `${size}px` }}>
			<MdSave style={{ color }} />
		</Container>
	);
};

const IconPlus = (props: IconsProps) => {
	const { size = 16, color = 'var(--white)' } = props;
	return (
		<Container style={{ height: `${size}px` }}>
			<BsFillPlusCircleFill style={{ color }} />
		</Container>
	);
};

const IconMinus = (props: IconsProps) => {
	const { size = 16, color = 'var(--white)' } = props;
	return (
		<Container style={{ height: `${size}px` }}>
			<BsFillDashCircleFill style={{ color }} />
		</Container>
	);
};

export {
	IconPlay,
	IconClose,
	IconCheck,
	IconReport,
	IconPDF,
	IconDownload,
	IconList,
	IconGrid,
	IconCheckClip,
	IconPlusCircle,
	IconDashCircle,
	IconCalendar2Week,
	IconCalendar,
	IconArrowLeft,
	IconArrowRight,
	IconSave,
	IconPlus,
	IconMinus,
	IconExclamation
};
