import { Container } from './style';
import dayjs from 'dayjs';
import classnames from 'classnames';
import { IconCalendar2Week } from '../Icons';

interface DateTimeProps {
	date: string | Date;
	noTime?: boolean;
	theme?: 'white';
	mobile?: boolean;
}

const DateTime = (props: DateTimeProps) => {
	const { date, theme = 'white', noTime = false, mobile = false } = props;
	const getDate = () => {
		if (!date) return 'sem data';

		return dayjs(date).format('DD/MM/YYYY');
	};

	const getTime = () => {
		if (!date || noTime) return '';

		return dayjs(date).format(' [às] HH:mm');
	};

	const getStyle = () => {
		if (mobile && noTime) return { width: '90px', fontSize: 10 };
		if (mobile) return { width: '140px', fontSize: 10 };
		if (noTime) return { width: '108px' };
		if (!date) return { width: '104px' };

		return { width: '175px' };
	};

	return (
		<Container className={classnames({ theme })} style={getStyle()}>
			<IconCalendar2Week />
			<div className="data">
				<span>{getDate()}</span>
				<span>{getTime()}</span>
			</div>
		</Container>
	);
};

export default DateTime;
